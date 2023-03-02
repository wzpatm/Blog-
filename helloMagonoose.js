const mongoose = require('mongoose');//引入模块
mongoose.connect('mongodb://localhost/test1');//连接数据库 默认端口为27017

const schema = mongoose.Schema
const Catschema  =  new schema({
    name:String,
    type:String,
    age:Number
})
const Cat = mongoose.model('Cat',Catschema);//创建一个名为cats的collections（集合），约束条件为Catschema
const kitty = new Cat(
    { 
        name: 'Zildjian',
        age:'5',
        type:"white"
    },
);
//每一个document都是model的实例
kitty.save().then(() => console.log('meow')); 
console.log(kitty instanceof Cat);//这样是true
Cat.create([ { 
    name: 'Zildjian',
    age:'5',
    type:"white"
},
{ 
    name: 'xiaoxiao',
    age:'5',
    type:"white"
},
{ 
    name: 'xiaowang',
    age:'8',
    type:"yellow"
},]).then(()=>{console.log('插入成功');})
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
// mongoose.disconnect()
Cat.find({age:5},"type").then((type)=>{console.log(type instanceof Cat);})//这样是false
Cat.updateOne({type:"yellow"},{$set:{age:"18"}}).then(()=>{console.log('修改成功');})