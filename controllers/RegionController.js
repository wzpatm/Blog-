const RegionService = require("../services/Region")
const RegionController =  {
  getRegions:async (req,res)=>{
        const msg = await RegionService.getRegions()
        const data= {
          code:"200",
          data:msg,
          message:'success'
       }
        res.send(data)
      },
}
module.exports =  RegionController