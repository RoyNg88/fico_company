/* eslint-disable eqeqeq */
/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
const express = require('express');
const Fundraiser = require('../schemas/fundraiser');
const router = express.Router();
const multer = require('multer');
const fs = require('fs')
const sharp = require('sharp')
const auth = require("../middleware/verifyToken");




/* ---------------------------------------------------- 
                START: Storage
---------------------------------------------------- */
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/fundraisers/')
    },
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 16
    },
    fileFilter: fileFilter
});
/* ---------------------------------------------------- 
                END: Storage
---------------------------------------------------- */

/* ---------------------------------------------------- 
                START: Router
---------------------------------------------------- */


// GET Fundraiser

router.get('/',  (req, res) => {
    Fundraiser.find({})
        // .populate('postedBy')
        .then((docs) => {
            // res.json(docs);
            res.send(docs);

        }).catch((err) => {
            console.log(`Error in all fundraiser: ${err}`);
            res.send(err);
        });
})

router.get('/:id', function (req, res) {
    Fundraiser.findOne({id: req.params.id}, function (err, fundraiser) {
        if(fundraiser){
        res.send(fundraiser)
        }
        else{
            res.send("Not found")
        }
    })
})

// CREATE Fundraiser

router.post('/', auth ,upload.single('image'), (req, res) => {  
    const path = "/" + req.file.path.split("\\").join("/");
    console.log(req.file);
    sharp(req.file.path).resize(256, 256).toFile('./uploads/fundraisers/' + '256x256-' + req.file.filename, (err) => {
        if (err) {
            console.error('Sharp Error: ', err)
        }
        console.log('Resize successfully');
        fs.unlinkSync('.' + path)
    });
    console.log(path);
    Fundraiser.create({
        ...req.body,
        image: path.replace(req.file.filename, '256x256-' + req.file.filename)
    })
    // .populate('postedBy')
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
})

// UPDATE Fundraiser

router.put('/:id', auth, upload.single('image'), (req, res) => {
    if (req.file) {
        if (req.body.id) {
            let path = "/" + req.file.path.split("\\").join("/");
            sharp(req.file.path).resize(256, 256).toFile('./uploads/fundraiser/' + '256x256-' + req.file.filename, (err) => {
                if (err) {
                    console.log('Sharp Error: ', err)
                }
                console.log('Resize successfully');
                fs.unlinkSync('.' + path)
            });
            console.log(path);
            Fundraiser.findOneAndUpdate(
                { id: req.params.id },
                {
                    ...req.body,
                    image: path.replace(req.file.filename, '256x256-' + req.file.filename)
                },
                { new: true }
            )
                .then(doc => res.send(doc))
                .catch(err => res.send(err))
        } 
    } else {
        Fundraiser.findOneAndUpdate(
            { id: req.params.id },
            {
                title: req.body.title,
                name: req.body.name,
                address: req.body.address,
                information: req.body.information,
                category: req.body.category,
                donate: req.body.donate,
            },
            { new: true })
            .then(doc => res.send(doc))
            .catch(err => res.send(err))
    }

})

// DELETE Fundraiser

router.delete('/:id', auth, (req, res) => {
    
    Fundraiser.findOne({ id: req.params.id }, (err, fundraiser) => {
        if (err) {
            handleError(err);
        } else if (fundraiser.image) {
            if (typeof fundraiser.image !== 'undefined' && fundraiser.image !== '') {
                fs.unlinkSync('.' + fundraiser.image);
            }
        }
    })

    Fundraiser.deleteOne({ id: req.params.id })
        // .populate('postedBy')
        .exec((err, docs) => {
            if (err !== null) {
                console.log(`Error in delete 1 fundraiser: ${err}`);
            } else {
                res.send(docs);
            }
        })

})

// SEARCH
let search = require('./controller/search');
router.get('/search', search)
/* ----------------------------------------------------
                END: Router
---------------------------------------------------- */

module.exports = router;