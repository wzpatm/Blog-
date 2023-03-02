
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const BlogCommentType = {
    ArticleId:String,
    ArticleName:String,
    ArticleCommentNickName:String,
    ArticleCommentEmail:String,
    ArticleCommentText:String,
    ArticleCommentDate:String,
    ArticleCommentCity:String
}

const BlogCommentModel = mongoose.model("BlogComment",new Schema(BlogCommentType))
// BlogCommentModel.create({ArticleId:'DQ1',ArticleCommentNickName:'菜鸟',ArticleCommentEmail:'969872569@QQ.COM',ArticleCommentDate:"2022-10-5",ArticleCommentText:"测试第一次评论"}).then(()=>{
//     console.log('插入成功');
// })
module.exports = BlogCommentModel