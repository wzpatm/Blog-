const mongoose = require("mongoose")
const Schema = mongoose.Schema
const rights = {
   id:Number,
   title:String,
   key:String,
   pagepermisson:Number,
   grade:Number
}

const rightsModel = mongoose.model("right",new Schema(rights))
module.exports = rightsModel