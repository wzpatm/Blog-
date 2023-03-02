const mongoose = require("mongoose")
const Schema = mongoose.Schema
const TimeLineType = {
    timeline:String,
    time:String,
    sort:Number
}

const TimeLineModel = mongoose.model("TimeLine",new Schema(TimeLineType))
module.exports = TimeLineModel