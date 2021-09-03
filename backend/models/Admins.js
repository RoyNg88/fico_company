// /* eslint-disable no-undef */
// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken')

// const auth = require('../middleware/verifyToken')
// const Admin = require('../schemas/admin');

// router.get('/', function(req, res){
//     Admin.find({}, function(err, admins){
//         if (err) handleError(err)
//         res.send(admins)
//     })
    
// })

// router.post('/', auth, function(req, res){
//     Admin.find({}, function(err, admins){
//         if(err) handleError(err)
//         Admin.findOne({username: req.body.username}, function(err, admin){
//         if (!admin){
//             let admin = {
//                 username: req.body.username,
//                 email: req.body.email,
//             }
//             // set token and store it
//             jwt.sign({admin}, 'secretkey', function(err, token){
//             Admin.create({
//                 id: handleID(admins),
//                 username: req.body.username,
//                 email: req.body.email,
//                 password: req.body.password,
//                 token: token
//             }, function (err, admin) {
//                 if (err) handleError(err)
//                 res.send(admin)
//             })
//             })
//         }else{
//             res.send({"result":"username or email taken"})
//         }
//         })
//     })
// })
// router.delete('/:id', function(req, res){
//     Admin.deleteOne({id: req.params.id}, function(err, result){
//         if(err) handleError(err)
//         res.send(result)
//     })
// })


// function handleError(err){
//     console.log(err)
// }

// function handleID(res){
//     let length = res.length
//     if (length === 0 ){
//         return "1"
//     }
//     else{
//     let last_item = res[length-1].id
//     last_item = parseInt(last_item, 10)
//     last_item += 1;
//     last_item = last_item.toString(10);
//     return last_item
//     }
// }


// module.exports = router;
