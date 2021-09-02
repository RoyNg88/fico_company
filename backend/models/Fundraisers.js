/* eslint-disable eqeqeq */
/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
const app = require('express');
const Fundraiser = require('../schemas/fundraiser');
const router = app.Router();
const multer = require('multer');
const fs = require('fs')
// const auth = require('../middleware/auth')
const sharp = require('sharp')



/* ---------------------------------------------------- 
                START: Storage
---------------------------------------------------- */
let storage = multer.diskStorage({
    destination: "./uploads/fundraiser",
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

let upload = multer({
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



router.post('/', upload.single('image'), (req, res) => {    
    if(req.file){
    if(req.body.id){
    let path = "/" + req.file.path.split("\\").join("/")
    console.log(req.file);
    sharp(req.file.path).resize(256, 256).toFile('./uploads/fundraiser/' + '256x256-' + req.file.filename , (err) => {
        if (err) {
        console.error('sharp>>>', err)
        }
        console.log('Resize successfully')
        fs.unlinkSync('.'+path)
        });
    console.log(path)
    Fundraiser.create({
        id: req.body.id,
        title: req.body.title,
        name: req.body.name,
        datePosted: req.body.datePosted,
        category: req.body.category,
        address: req.body.address,
        information: req.body.information,
        donate: req.body.donate,
        image: path.replace(req.file.filename, '256x256-' + req.file.filename) 
    }, (err, fundraiser) => {
        res.send(fundraiser)
    })
}
}else{
    Fundraiser.create({
        id: req.body.id,
        title: req.body.title,
        name: req.body.name,
        datePosted: req.body.datePosted,
        category: req.body.category,
        address: req.body.address,
        information: req.body.information,
        donate: req.body.donate,
    }, (err, fundraiser) => {
        res.send(fundraiser)
    })
    }
})    

router.put('/:_id', upload.single('image'), (req, res) => {

    if (req.file) {
        if (req.body._id) {
            let path = "/" + req.file.path.split("\\").join("/");
            sharp(req.file.path).resize(256, 256).toFile('./uploads/fundraiser/' + '256x256-' + req.file.filename, (err) => {
                if (err) {
                    console.log('Sharp Error: ', err)
                }
                console.log('Resize successfully');
                fs.unlinkSync('.' + path)
            });
            console.log(path);
            Fundraiser.findByIdAndUpdate(
                { _id: req.params._id },
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
        Fundraiser.findByIdAndUpdate(
            { _id: req.params._id },
            {
                title: req.body.title,
                name: req.body.name,
                category: req.body.category,
            },
            { new: true })
            .then(doc => res.send(doc))
            .catch(err => res.send(err))
    }

})


router.delete('/:_id', (req, res) => {
    
    Fundraiser.findOne({ _id: req.params._id }, (err, fundraiser) => {
        if (err) {
            handleError(err);
        } else if (fundraiser.image) {
            if (typeof fundraiser.image !== 'undefined' && fundraiser.image !== '') {
                fs.unlinkSync('.' + fundraiser.image);
            }
        }
    })

    Fundraiser.deleteOne({ _id: req.params._id })
        // .populate('postedBy')
        .exec((err, docs) => {
            if (err !== null) {
                console.log(`Error in delete 1 fundraiser: ${err}`);
            } else {
                res.send(docs);
            }
        })

})
let search = require('./controller/search');
router.get('/search', search)
/* ----------------------------------------------------
                END: Router
---------------------------------------------------- */

module.exports = router;