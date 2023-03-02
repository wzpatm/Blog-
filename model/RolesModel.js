const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Roles = {
    id:Number,
    roleName:String,
    roleType:Number,
    rights:Object
}

const RolesModel = mongoose.model("role",new Schema(Roles))
module.exports =  RolesModel