const mongoose = require("mongoose")
const Schema = mongoose.Schema
const BlogType = {
    ArticleType:String,
    // AtricleNumber:Number,
}

const BlogTypetModel = mongoose.model("BlogType",new Schema(BlogType))
module.exports = BlogTypetModel