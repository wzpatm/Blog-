const BlogIndexModel = require("../model/BlogIndexModel")
const BlogIndexservice = {
   getBlogIndex: (page, limit) => {
      return BlogIndexModel.find({}).skip((page - 1) * limit).limit(limit).sort({ "time": -1 })
   },
   getBlogType: () => {
      return BlogIndexModel.aggregate([{
         $group: {
            _id: "$type"
         }
      }])
   },
   getBlogNumber: () => {

      return BlogIndexModel.find({}).count()
   },
   getBlogViewsNumber: () => {

      return BlogIndexModel.aggregate([{
         $group: {
            _id: null,
            totalViews: { $sum: '$views' }
         }
      }])
   },
   getBlogCommentNumber: () => {

      return BlogIndexModel.aggregate([{
         $group: {
            _id: null,
            totalComment: { $sum: '$comment' }
         }
      }])
   },
   postBlog: (data) => {
      console.log(data);
      BlogIndexModel.create({
         avatar: data.avatar,
         title: data.title,
         descript: data.descript,
         type: data.type,
         time: data.time,
         content: data.content,

      }).then(() => { console.log('插入成功'); })
      return '插入成功'
   },
   getBlogDetail: (_id, title) => {
      BlogIndexModel.updateOne({ _id: _id }, { $inc: { views: 1 } }).then(() => {
         console.log('阅读+1');
      })// 为什么要加上then才可以执行上述代码 或者加上第三个参数（回调函数）

      return BlogIndexModel.find({ _id: _id, title: title }, {content:1,title:1,time:1,comment:1,views:1})
   },
   addBlogComment: (_id, title) => {
      return BlogIndexModel.updateOne({ _id: _id, title: title }, { $inc: { comment: 1 } })
   },//增加评论数量
   getHotBlogTitle:()=>{
        return BlogIndexModel.aggregate([{
         $sort:{
            views:-1
         },
        },{
          $project :{
              title:1,
              _id:1
          }          
        }]).limit(6)
   },//返回热门博文
   getTypeBlog:(type)=>{
   
       return BlogIndexModel.find({type:type})
   },//返回指定类型博客
   delBlogIndex:(_id)=>{
       return  BlogIndexModel.remove({_id:_id})
   },
   getBlogInfo:(_id)=>{
      return BlogIndexModel.find({_id:_id},{content:1,title:1,time:1,comment:1,views:1,type:1})
   },
   patchBlogInfo:(ReInfo)=>{
      return  BlogIndexModel.updateOne({_id:ReInfo._id},{$set:{"avatar":ReInfo.avatar,"title":ReInfo.title,"descript":ReInfo.descript,"content":ReInfo.content,"type":ReInfo.type,"time":ReInfo.time}})
   }
}
module.exports = BlogIndexservice