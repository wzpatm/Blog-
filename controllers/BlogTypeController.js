const BlogTypeService = require("../services/BlogType")
const BlogTypeController =  {
    getBlogType: async (req,res)=>{
        const msg = await BlogTypeService.getBlogType()
        const data = {
          code:"200",
          data:msg,
           message:'success'
        }
        res.status(200).send(data)
  },
  postBlogType:async (req,res)=>{
    const ArticleType = req.body
    const msg = await BlogTypeService.postBlogType(ArticleType)
    const data = {
      code:"200",
      data:msg,
     message:'success'
    }
    res.status(200).send(data)
   },
   delBlogType:async (req,res)=>{
      const {_id} = req.query
      const msg = await BlogTypeService. delBlogType(_id)
      const data = {
        code:"200",
        data:msg,
       message:'success'
      }
      res.status(200).send(data)

   },
   patchBlogType:async (req,res)=>{
    const item = req.body
    const msg = await BlogTypeService.patchBlogType(item)
    const data = {
      code:"200",
      data:msg,
     message:'success'
    }
    res.status(200).send(data)

 },
  
}
module.exports = BlogTypeController