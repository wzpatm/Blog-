const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Blog")
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
//   we're connected
console.log('数据库已经连接');
});
db.once('close', function() {
    //   we're connected
    console.log('数据库已断开');
    });