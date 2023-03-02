const express=require('express');
const fs = require('fs')
var path = require('path');
const router=express.Router();
//上传图片的模板
var multer=require('multer');
//生成的图片放入uploads文件夹下
var upload=multer({dest:'static/uploads/'})
//图片上传必须用post方法
router.post('/img',upload.single('avatar'),(req,res)=>{
    console.log(req);
    //读取路径（req.file.path）
    fs.readFile(req.file.path,(err,data)=>{
    //读取失败，说明没有上传成功
        if(err){
            console.log(err);
            return res.send('上传失败')
        }  
     //否则读取成功，开始写入
     //如果读取成功
    //声明图片名字为时间戳和随机数拼接成的，尽量确保唯一性
    let time=Date.now()+parseInt(Math.random()*999)+parseInt(Math.random()*2222);
    //拓展名
    let extname=req.file.mimetype.split('/')[1]
    //拼接成图片名
    let keepname=req.file.originalname.split('.')[0]+time+'.'+extname
     //我们先尝试用原文件名originalname写入吧
     // 三个参数
     //1.图片的绝对路径
     //2.写入的内容
     //3.回调函数  
      fs.writeFile(path.join(__dirname,'../static/images/'+keepname),data,(err)=>{
            if(err){return res.send({
                "errno": 1, // 只要不等于 0 就行
                "message": "失败信息"
            }   )}
            res.send({
                "errno":0,
                "data":{
                    "url":'http://localhost:8888/'+'images/'+keepname,
                    "alt":req.body.originalname,
                }
            })
        })
    })
})
module.exports=router;