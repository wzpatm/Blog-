const UserInfoModel = require("../model/UsersModel.js")

const UserInfoservice = {

    postUserInfo:(info)=>{
      return   UserInfoModel.aggregate([
            {
            $match:{
                username:info.username,
                password:info.password
            },
        },{  
            $lookup:{
                from:'roles',
                localField:'roleId',
                foreignField:'roleType',
                as:'role'
            },
        }]).then(res=>{
            console.log(res);

            if(res[0]?.roleState){
                return[
                    {
                        username:res[0].username,
                        password:res[0].password, 
                        role:res[0].role,
                        roleId:res[0].roleId,
                        region:res[0].region
                    }
                ]
            }else
             return [];
        });
     },
     getUserInfo:()=>{
       return  UserInfoModel.aggregate([
        {  
            $lookup:{
                from:'roles',
                localField:'roleId',
                foreignField:'roleType',
                as:'role'
            },
        }
       ])
     }
}
module.exports = UserInfoservice