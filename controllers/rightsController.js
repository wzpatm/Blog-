const rightsService = require("../services/rights")
const rightsController =  {
  getrights:async (req,res)=>{
        const msg = await rightsService.getrights()
        const data= {
          code:"200",
          data:msg,
          message:'success'
       }
        res.send(data)
      },
      getRightsChildren:async (req,res)=>{
        const msg = await rightsService.getRightsChildren()
        const data= {
          code:"200",
          data:msg,
          message:'success'
       }
        res.send(data)
      },
      delRights:async (req,res)=>{
        const {id} = req.params
        const msg = await rightsService.delRights(id)
        const data= {
          code:"200",
          data:msg,
          message:'success'
       }
        res.send(data)
      },
}
module.exports = rightsController