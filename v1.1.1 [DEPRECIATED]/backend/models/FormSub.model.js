const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    fullName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    subject:{
        type:String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
})


module.exports = mongoose.model("FormSub", formSchema, "form_submissions")