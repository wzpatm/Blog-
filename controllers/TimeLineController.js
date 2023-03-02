const TimeLineService = require("../services/TimeLine")
const TimeLineController =  {
  getTimeLine:async (req,res)=>{
        const msg = await TimeLineService.getTimeLine()
        const data= {
          code:"200",
          data:msg,
          message:'success'
       }
        res.send(data)
      },
}
module.exports = TimeLineController