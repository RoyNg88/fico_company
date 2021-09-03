/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
const app = require('express');
const router = app.Router();
const bcrypt = require('bcryptjs');
const User = require('../schemas/user');
const fs = require('fs')
const auth = require("../middleware/verifyToken");
const sharp = require('sharp');


// GET
router.get('/', auth, (req, res, next) => {
   User.find({}, (err, users) => {
      if (err) return next(err);
      res.send(users);
   })
})


router.get('/:id', auth, (req, res, next) => {
   User.find({ _id: req.query.s }, (err, user) => {
    if (user){
        res.send(user)
        }
        else{
            res.send("Not found")
        }
    })
})


//DELETE
router.delete('/:_id', auth, (req, res) => {
    User.findOne({id: req.params.id}, function(err, user){
        if(err){ handleError(err)}
        else if(user.profilePicture) {
            if(typeof user.profilePicture !== 'undefined' && user.profilePicture !== '' && user.profilePicture.indexOf('/uploads/users/default_profile') === -1){
                fs.unlinkSync('.'+user.profilePicture);
            }
        }
    })
    User.deleteOne({id: req.params.id}, function(err, result){
        res.send(result)
    })
})
router.delete('/:_id', auth, async (req, res) => {
    if (req.user._id === req.params._id && req.user.isAdmin) {
      try {
        await User.findByIdAndDelete({ _id: req.params._id })
        res.status(200).send("Account has been deleted")
      } catch (err) {
        return res.status(500).send(err)
      }
    } else {
      return res.status(403).send("You can only delete your account!")
    }
  })

// UPDATE
// router.put('/:_id', auth, async (req, res) => {
//     if (req.params._id == req.user._id || req.user.isAdmin) {
//       console.log(req.user._id)
//       // Hash password
//       if (req.body.password) {
//         try {
//           const salt = await bcrypt.genSaltSync(10)
//           req.body.password = await bcrypt.hash(req.body.password, salt)
//         } catch (err) {
//           return res.status(500).send(err)
//         }
//       }
  
//       try {
//         await User.findByIdAndUpdate(req.params._id, {
//           $set: req.body
//         })
//         res.status(200).send('Account has been updated')
//       } catch (err) {
//         return res.status(500).send(err)
//       }
  
//     } else {
//       console.log(req.body._id)
//       return res.status(403).send("Only update your account")
//     }
//   })

router.put('/:_id', auth, async (req, res, next) => {
    if (req.user && req.user.isAdmin) {
    // Hash password
    if (req.body.password) {
          const salt = await bcrypt.genSaltSync(10)
          req.body.password = await bcrypt.hash(req.body.password, salt)
      }
    if(req.file){
    // UPLOAD Image
        User.findOne(req.params._id, function(err, user){
    if(err) handleError(err)
        fs.unlinkSync('.'+user.profilePicture)
        } )
        const path = "/" + req.file.path.split("\\").join("/")
        console.log(req.file);
        sharp(req.file.path).resize(256, 256).toFile('./uploads/users/' + '256x256-' + req.file.filename , function(err) {
    if (err) {
            console.error('sharp>>>', err)
        }
        console.log('Resize successfully')
        fs.unlinkSync('.'+path)
        });
        console.log(path)
        User.findByIdAndUpdate(req.params._id,{
         name: req.body.name,
         email: req.body.email,
         password: req.body.password,
         profilePicture: path.replace(req.file.filename, '256x256-' + req.file.filename)
    }, 
        function(err, result){
            res.status(200).send('Account has been updated')
    })
    }
    
// ------------------------
    else{
        User.findByIdAndUpdate( req.params._id,{
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
        }, 
           function(err, result){
           res.status(200).send('Account has been updated')}
        )

    }}else {
        console.log(req.body._id)
        return res.status(403).send("Only update your account")
      }
 }) 

// CREATE
router.post('/', auth, async (req, res, next) => {
   try {
      let salt = await bcrypt.genSalt(10);
      let encryptedPass = await bcrypt.hash(req.body.password, salt);
      let userObj = {
         name: req.body.name,
         email: req.body.email,
         password: encryptedPass
      }
      User.create(userObj, (err, user) => {
         if (err) return next(err);
         res.send(user);
      })
   }
   catch (e) {
      console.log(e);
   }
})

 

module.exports = router;