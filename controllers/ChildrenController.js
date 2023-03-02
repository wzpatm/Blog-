const  ChildrenService = require("../services/Children")//二级路由
const ChildrenController =  {
  getChildren:async (req,res)=>{
        const msg = await ChildrenService.getChildren()
        const data= {
          code:"200",
          data:msg,
          message:'success'
       }
        res.send(data)
      },
      delChildren:async (req,res)=>{
        const {id} = req.params
        const msg = await ChildrenService.delChildren(id)
        const data= {
          code:"200",
          data:msg,
          message:'success'
       }
        res.send(data)
      },
}
module.exports = ChildrenController