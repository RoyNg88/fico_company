const mongoose = require('mongoose');

const FundraiserSchema = new mongoose.Schema({
    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Admin",
    // },
    title: String,
    category:  String,
    namePost: String,
    address:  String,
    donate: String,
    information: String,
    image:  String,
    datePosted: {
        type: Date,
        default: new Date()
    },
    // comments: [{
    //     admin: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "admin",
    //     },
});


const Fundraiser = mongoose.model('fundraiser', FundraiserSchema);
module.exports = Fundraiser;

