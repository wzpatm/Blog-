const BlogTypeModel = require("../model/BlogTypeModel")
const BlogIndexModel = require("../model/BlogIndexModel")
const BlogTypeservice = {
    getBlogType: () => {
        return BlogTypeModel.find({})
     },
     postBlogType:(ArticleType)=>{
    return  BlogTypeModel.create({"ArticleType":ArticleType.ArticleType})
     },
     delBlogType:(_id) =>{
        return  BlogTypeModel.remove({"_id":_id})
     },
     patchBlogType:(item)=>{
      // BlogIndexModel.updateone({''})// 修改之后 blogindex表里面的type怎么修改
         return  BlogTypeModel.updateOne({'_id':item._id},{$set:{'ArticleType':item.ArticleType}})
     }
}
module.exports = BlogTypeservice