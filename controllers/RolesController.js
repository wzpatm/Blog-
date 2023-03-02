const RolesService = require("../services/Roles")
const RolesController =  {
    getRoles:async (req,res)=>{
    const msg = await RolesService. getRoles()
    const data= {
      code:"200",
      data:msg,
      message:'success'
   }
    res.send(data)
  },
  delRoles:async (req,res)=>{
    const {id} = req.query
    const msg = await RolesService.delRoles(id)
    const data= {
      code:"200",
      data:msg,
      message:'success'
   }
    res.send(data)
  },
  patchRoles: async (req,res)=>{
    const {id} = req.params
    const {rights} = req.body
    console.log('dsadsads',id,rights);
    const msg = await RolesService.patchRoles(id,rights)
    const data= {
        code:"200",
        data:msg,
        message:'success'
     }
      res.send(data)
  }
}
module.exports = RolesController