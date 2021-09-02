/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
const app = require('express');
const router = app.Router();
const bcrypt = require('bcryptjs');
const User = require('../schemas/user');
const fs = require('fs')
const auth = require("../middleware/auth");
const sharp = require('sharp');

router.get('/', (req, res, next) => {
   User.find({}, (err, users) => {
      if (err) return next(err);
      res.send(users);
   })
})

// router.get('/name', (req, res, next) => {
//    User.find({ name: { $regex: req.query.s } }, (err, users) => {
//       if (err) return next(err);
//       res.send(users);
//    })
// })

router.get('/:id', (req, res, next) => {
   User.find({ _id: req.query.s }, (err, user) => {
    if (user){
        res.send(user)
        }
        else{
            res.send("Not found")
        }
    })
})

// router.get('/username', (req, res, next) => {
//    User.find({ username: { $regex: req.query.s } }, (err, users) => {
//       if (err) return next(err);
//       res.send(users);
//    })
// })

router.delete('/:id', auth, (req, res) => {
    User.findOne({id: req.params.id}, function(err, user){
        if(err){ handleError(err)}
        else if(user.user_Photo) {
            if(typeof user.user_Photo !== 'undefined' && user.user_Photo !== '' && user.user_Photo.indexOf('/uploads/users/default_profile') === -1){
                fs.unlinkSync('.'+user.user_Photo);
            }
        }
    })
    User.deleteOne({id: req.params.id}, function(err, result){
        res.send(result)
    })
})

router.put('/:id', auth, async (req, res, next) => {
    if(req.file){
        User.findOne({id: req.params.id}, function(err, user){
            if(err) handleError(err)
            fs.unlinkSync('.'+user.user_Photo)
        } )
    var path = "/" + req.file.path.split("\\").join("/")
    console.log(req.file);
    sharp(req.file.path).resize(256, 256).toFile('./uploads/users/' + '256x256-' + req.file.filename , function(err) {
        if (err) {
            console.error('sharp>>>', err)
        }
        console.log('Resize successfully')
        fs.unlinkSync('.'+path)
        });
        console.log(path)
        User.findOneAndUpdate({id: req.params.id.toLowerCase()},{
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        user_Photo: path.replace(req.file.filename, '256x256-' + req.file.filename)
    }, 
        function(err, result){
        res.send(result)
    })
    }
    else{
        User.findOneAndUpdate({id: req.params.id.toLowerCase()},{
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
        }, 
            function(err, result){
            res.send(result)
        })

    }
 }) 

// router.put('/password', auth, async (req, res, next) => {
//    try {
//       let salt = await bcrypt.genSalt(10);
//       let encryptedPass = await bcrypt.hash(req.body.password, salt);
//       User.findOneAndUpdate({ _id: req.body.id }, {password: encryptedPass}, (err, user) => {
//          if (err) return next(err);
//          res.send(user);
//       }
//       )
//    }
//    catch (e) {
//       console.log(e);
//    }
// })

router.post('/', auth, async (req, res, next) => {
   try {
      let salt = await bcrypt.genSalt(10);
      let encryptedPass = await bcrypt.hash(req.body.password, salt);
      let userObj = {
         name: req.body.name,
         username: req.body.username,
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