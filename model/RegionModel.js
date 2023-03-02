const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Region = {
        id: Number,
       title:String,
       value:String

}

const RegionModel = mongoose.model("region",new Schema(Region))
module.exports = RegionModel 