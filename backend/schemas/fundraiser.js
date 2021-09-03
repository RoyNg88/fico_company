const mongoose = require('mongoose');

const FundraiserSchema = new mongoose.Schema({
    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Admin",
    // },
    title: {
        type: String,
        required: true},
    category:  {
        type: String,
        required: true},
    name:  {
        type: String,
        required: true},
    address:  {
        type: String,
        required: true},
    donate:  {
        type: String,
        required: true},
    information:  {
        type: String,
        required: true},
    image:  {
        type: String,
        required: true}, 
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


module.exports = mongoose.model('fundraiser', FundraiserSchema);

