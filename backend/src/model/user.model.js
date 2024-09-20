const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        unique : true,
        minLength : [5, "Minimum length required: 5 characters"],
        maxLength : [15, "Maximum length required: 15 characters"]
    }, 
},{
    timestamps : true,
    versionKey : false,
})

module.exports = mongoose.model("user", userSchema)