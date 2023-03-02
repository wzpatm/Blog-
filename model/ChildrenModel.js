const mongoose = require("mongoose")
const Schema = mongoose.Schema
const children = {
        id: Number,
        title:String ,
        rightId:Number,
        key: String,
        grade:Number

}

const childrenModel = mongoose.model("children",new Schema(children))
module.exports =  childrenModel 