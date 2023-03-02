var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const BlogIndexModel = require("../Blog-serve/model/BlogIndexModel")
// var indexRouter = require('./routes/index');
var blogRouter = require('./routes/Blogs');
const upload=require('./routes/upload.js');
var app = express();
const JWT = require('./utils/JWT');
const { Server } = require('http');
// const cors=require('cors');
// app.use(cors())
// view engine setup
console.log(server.timeout);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');//ssr渲染
app.use((req, res, next) => {
  //排除login相关的路由和接口
  if (req.url.includes("login")||req.url.includes("images") ) {
    next()
    return
  }
  const token = req.headers["authorization"]?.split(" ")[1]
  console.log('dwqdqwdq',req.headers.authorization);
console.log(token);
  if(token){
    const payload=  JWT.verify(token)
    if(payload){
      //重新计算token过期时间
      console.log(payload);
      const newToken = JWT.generate({
        pasword:payload.pasword,
        username:payload.username
      },"1d")
      res.header("Authorization",newToken)
      next()
    }else{
      res.status(401).send({errCode:-1,errInfo:"token过期"})
    }
  }else{
    // next()
  }
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//extended: false 改为true时  当extended为true的时候，返回对象则可为任何数据类型。否则只能为键值对中的值就为'String'或'Array'形式
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));//'访问/路径  跳转到static目录下'
// app.use('/', indexRouter);
app.use('/api',blogRouter);
app.use('/upload',upload)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
