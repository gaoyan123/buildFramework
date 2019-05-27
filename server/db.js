const mongoose = require('mongoose');
// 连接并创建数据库test
mongoose.connect('mongodb://localhost/test');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));

/************** 定义模式userSchema **************/
// 在test数据库中创建一个userSchema的表，并创建username和passWord字段
const userSchema = new mongoose.Schema({
    username : String,
    password : String
});

/************** 定义模型Model **************/
// 将Schema转化为一个model
const Models = {
    Login : mongoose.model('Login',userSchema)
}

module.exports = Models;