const RolesModel = require("../model/RolesModel")
const Rolesservice = {
    getRoles:()=>{
        return RolesModel.find({})
     },
     delRoles:(id)=>{
        return RolesModel.deleteOne({id:id})
     },
     patchRoles:(id,rights) => {
        return RolesModel.updateOne({'id':id},{$set:{'rights':rights}})
     }
}
module.exports =  Rolesservice