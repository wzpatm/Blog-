const RegionModel = require("../model/RegionModel")
const Regionservice = {
    getRegions:()=>{
        return RegionModel.find({})
     }
}
module.exports =  Regionservice