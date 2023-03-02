const TimeLineModel = require("../model/TimeLineModel")
const TimeLineservice = {
     getTimeLine:()=>{
        return TimeLineModel.find({}).sort({"time":-1})
     }
}
module.exports = TimeLineservice