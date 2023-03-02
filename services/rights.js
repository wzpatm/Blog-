const rightsModel = require("../model/rightsModel")
const rightsservice = {
     getrights:()=>{
        return rightsModel.find({})
     },
     getRightsChildren:()=>{
        return rightsModel.aggregate([
            {  
                $lookup:{
                    from:'childrens',
                    localField:'id',
                    foreignField:'rightId',
                    as:'children'
                },
            }
           ])
     },
     delRights:(id)=>{
           return rightsModel.deleteOne({"id":id})
     }
}
module.exports = rightsservice