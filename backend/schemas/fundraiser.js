const mongoose = require('mongoose');

const FundraiserSchema = new mongoose.Schema({
    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Admin",
    // },
    title: String,
    category: String,
    name: String,
    address: String,
    date: String,
    donate: String,
    information: String,
    image: String, 
    datePosted: {
        type: Date,
        default: new Date()
    },
    // comments: [{
    //     admin: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "admin",
    //     },
    //     content: {
    //         type: String,
    //         required: true
    //     },
    //     created_at: {
    //         type: Date,
    //         default: Date.now
    //     }
    // }]
});


module.exports = mongoose.model('fundraiser', FundraiserSchema);

