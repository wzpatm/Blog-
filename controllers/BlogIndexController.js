const BlogIndexservice = require("../services/BlogIndex")
const BlogIndexService = require("../services/BlogIndex")
const BlogIndexController =  {
    getBlogIndex:async (req,res)=>{
      if(req.query.page && req.query.limit){
        const {page,limit} = req.query
        console.log(req.query);
        const msg = await BlogIndexService.getBlogIndex(page,limit)
        console.log(msg);
        const data= {
           code:"200",
           data:msg,
           message:'success'
        }
        res.status(200).send(data)
      }else if(req.query.type=="add"){//评论+1
        const {_id,title} = req.query
        const msg = await  BlogIndexService.addBlogComment(_id,title)
        const data = {
          code:"200",
          data:msg,
          message:'success'
        }
        res.status(200).send(data)   
      }else{
        const {_id,title} = req.query
          const msg = await  BlogIndexService.getBlogDetail(_id,title)
          const data = {
            code:"200",
            data:msg,
            message:'success'
          }
          res.status(200).send(data)    
      }
     
    
      },
    getBlogType: async (req,res)=>{
          const msg = await BlogIndexservice.getBlogType()
          const data = {
            code:"200",
            data:msg,
             message:'success'
          }
          res.status(200).send(data)
    },
    getBlogNumber: async (req,res)=>{
      const msg = await BlogIndexservice.getBlogNumber()
      const data = {
        code:"200",
        data:msg,
         message:'success'
      }
      res.status(200).send(data)
    },
    postBlog:async (req,res)=>{
      const BlogInfo = req.body
      console.log(BlogInfo);
      const msg  = await BlogIndexservice.postBlog(BlogInfo)
      // console.log(req.body);
      const data = {
        code:"200",
        data:msg,
        message:'success'
      }
      res.status(200).send(data)
    },
    getBlogViewsNumber:async (req,res)=>{
        const msg = await BlogIndexservice.getBlogViewsNumber()
        const data = {
          code:"200",
          data:msg,
           message:'success'
        }
        res.status(200).send(data)

    },
    getBlogCommentNumber:async (req,res)=>{
      const msg = await BlogIndexservice.getBlogCommentNumber()
      const data = {
        code:"200",
        data:msg,
         message:'success'
      }
      res.status(200).send(data)

    },
     getHotBlogTitle:async (req,res)=>{
      const msg = await BlogIndexservice.getHotBlogTitle()
      const data = {
        code:"200",
        data:msg,
         message:'success'
      }
      res.status(200).send(data)
     },
     getTypeBlog:async (req,res)=>{
        console.log(req.query);
        const {type} = req.query 
        const msg = await  BlogIndexService.getTypeBlog(type)
        const data = {
          code:"200",
          data:msg,
           message:'success'
        }
        res.status(200).send(data)

     },
     delBlogIndex:async (req,res)=>{
               const {_id} = req.query 
               const msg = await  BlogIndexService.delBlogIndex(_id)
               const data = {
                code:"200",
                data:msg,
                 message:'success'
              }
              res.status(200).send(data)
     },
     getBlogInfo:async (req,res)=>{
              const {_id} = req.query
              const msg = await BlogIndexService.getBlogInfo(_id)
              const data = {
                code:"200",
                data:msg,
               message:'success'
              }
              res.status(200).send(data)
     },
     patchBlogInfo:async (req,res)=>{
         const ReInfo = req.body
         const msg = await BlogIndexService.patchBlogInfo(ReInfo)
         const data = {
           code:"200",
           data:msg,
          message:'success'
         }
         res.status(200).send(data)
     },

}
module.exports = BlogIndexController