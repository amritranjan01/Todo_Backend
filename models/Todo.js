const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
        maxlength: 50,


    },
    description :{
        type: String,
        required: true,
        maxlength: 50,

    },
    createdat:{
        type:Date,
        required:true,
        default:Date.now(),

    },
    updateat:{
        type:Date,
        required:true,
        default:Date.now(),

    }

 }
);

module.exports=mongoose.model("Todo",todoSchema);