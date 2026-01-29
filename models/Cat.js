const {Schema, model} = require("mongoose");

const catSchema = new Schema({
    img:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    backstory:{
        type: String,
        required:true,
        minLength:100
    }
})

const Cat = model("cats", catSchema)

module.exports = Cat