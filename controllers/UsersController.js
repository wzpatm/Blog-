const UserInfoservice = require("../services/UserInfo")
const JWT = require('../utils/JWT')
const UsersController =  {
 postUserInfo:async (req,res)=>{
    const  info =  req.body
        const msg = await UserInfoservice.postUserInfo(info)
        console.log(msg);
        if(msg.length===0){
            const data= {
                code:"404",
                data:'用户名或者密码错误！',
                message:'success'
             }
              res.send(data)
        }else{
            // console.log(msg[0])
             //设置token 
             const token = JWT.generate({
                password:msg[0].password,
                username:msg[0].username
              },"1d")  
              //token返回在header
              res.header("Authorization",token)
              //默认存在内存中。
              const data= {
                code:"200",
                data:{
                    'token':token,
                    'username':msg[0].username,
                    'role':msg[0].role,
                    'roleId':msg[0].roleId,
                    'region':msg[0].region
                },
                message:'success'
             }
             console.log(data);
              res.send(data)
        }
      
      },
 getUserInfo:async (req,res)=>{
  const msg = await UserInfoservice.getUserInfo()
  const data= {
    code:"200",
    data:msg,
    message:'success'
 }
  res.send(data)
   }   
}
module.exports = UsersController