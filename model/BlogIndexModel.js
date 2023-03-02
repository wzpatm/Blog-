
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const BlogIndexType = {
    avatar:String,
    title:String,
    descript:String,
    type:String,
    time:String,
    comment:Number,
    views:Number,
    content:String
}

const BlogIndexModel = mongoose.model("BlogIndex",new Schema(BlogIndexType))


module.exports = BlogIndexModel