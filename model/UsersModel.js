const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userInfo = {
        id: Number,
        username:String ,
        password: String,
        roleState: Boolean,
        default: Boolean,
        region: String,

}

const UserInfoModel = mongoose.model("user",new Schema(userInfo))
module.exports =  UserInfoModel 