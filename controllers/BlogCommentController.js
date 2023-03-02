const BlogCommentservice = require("../services/BlogComment");
const BlogCommentService = require("../services/BlogComment")
const BlogCommentController =  {
    getBlogComment:async (req,res)=>{
        let{_id}= req.query
        console.log( req.body);
        console.log(_id);
           const msg = await BlogCommentService.getBlogComment(_id)
           const data= {
            code:"200",
            data:msg,
            message:'success'
         }
         res.status(200).send(data)
    },
    postBlogComment: async (req,res)=>{
         let {ArticleCommentNickName,ArticleCommentEmail,ArticleCommentText,ArticleId} = req.body
         console.log('dddw',req);
         const msg = await BlogCommentservice.postBlogComment(req.body)
         const data= {
            code:"200",
            data:msg,
            message:'success'
         }
         res.status(200).send(data)
    }
}
module.exports =  BlogCommentController