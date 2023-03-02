const ChildrenModel = require("../model/ChildrenModel")
const Childrenservice = {
   getChildren:()=>{
        return ChildrenModel.find({})
     },
     delChildren:(id)=>{
      return  ChildrenModel.deleteOne({'id':id})
     }
}
module.exports = Childrenservice