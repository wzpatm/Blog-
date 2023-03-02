const BlogCommentModel = require("../model/BlogCommentModel")
const BlogCommentservice = {
    getBlogComment:(_id)=>{
        console.log(_id);
        return BlogCommentModel.find({ArticleId:_id}).sort({"ArticleCommentDate":-1})
    },
    postBlogComment:(data)=>{
        BlogCommentModel.create(data).then((res)=>{
                 console.log('评论成功');
                 
        })
        return ['评论成功']
    }
}
module.exports = BlogCommentservice