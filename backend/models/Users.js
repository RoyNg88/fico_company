/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
const app = require('express');
const router = app.Router();
const bcrypt = require('bcryptjs');
const User = require('../schemas/user');
const fs = require('fs')
const auth = require("../middleware/verifyToken");
const sharp = require('sharp');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/users/')
    },
    filename: function(req, file, cb){
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
    }
})

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
const upload = multer({
    storage: storage, limits:{
    fileSize: 1024 * 1024 * 16
    },
    fileFilter: fileFilter
});

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
router.delete('/:id', auth, (req, res) => {
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
router.delete('/:id', auth, async (req, res) => {
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

router.put('/:id', auth, upload.single('profilePicture'), async (req, res, next) => {
    let salt = await bcrypt.genSalt(10);
    let encryptedPass = await bcrypt.hash(req.body.password, salt);
    if (req.file) {
        if (req.body.id) {
            let path = "/" + req.file.path.split("\\").join("/");
            sharp(req.file.path).resize(256, 256).toFile('./uploads/users/' + '256x256-' + req.file.filename, (err) => {
                if (err) {
                    console.log('Sharp Error: ', err)
                }
                console.log('Resize successfully');
                fs.unlinkSync('.' + path)
            });
            console.log(path);
            User.findOneAndUpdate(
                { id: req.params.id },
                {
                    ...req.body,
                    profilePicture: path.replace(req.file.filename, '256x256-' + req.file.filename)
                },
                { new: true }
            )
                .then(doc => res.send(doc))
                .catch(err => res.send(err))
        } 
    } else {
        User.findOneAndUpdate(
            { id: req.params.id },
            {
                name: req.body.name,
                email: req.body.email,
                password: encryptedPass,
            },
            { new: true })
            .then(doc => res.send(doc))
            .catch(err => res.send(err))
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

function handleError(err){
    console.log(err)
 }
 

module.exports = router;