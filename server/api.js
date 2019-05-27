const models = require('./db');
const express = require('express');
const router = express.Router();
const path = require('path');

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
// 注册
router.post('/api/user/register',(req,res)=> {
    models.Login.find({username:req.body.username},(err,data)=> {
        if(err) {
            console.log(err)
            let newAccount = new models.Login({
                username:req.body.username,
                password:req.body.password
            })
            newAccount.save((err,data)=>{
                if(err){
                    res.send({'status': 1001, 'message': 'Fail to register!', 'data': err});
                }else {
                    res.send({'status': 1000, 'message': 'Register successfully!'});
                }
            })
        }else {
            if(data.length > 0) {
                res.send({'status': 1001, 'message': '用户已经注册!'});
            }else {
                let newAccount = new models.Login({
                    username:req.body.username,
                    password:req.body.password
                });
                newAccount.save((err,data)=>{
                    if(err){
                        res.send({'status': 1001, 'message': '注册失败!', 'data': err});
                    }else {
                        res.send({'status': 1000, 'message': '注册成功!'});
                    }
                });
            }
        }
    })
})
// 登录
router.post('/api/user/login',(req,res)=> {
    // 通过模型去查找数据库
    models.Login.find({username: req.body.username,password: req.body.password}, (err,data) => {
        console.log(req.body.username);
        if (err) {
            res.send({'status': 1001, 'message': 'The account is not existed!', 'data': err});
        } else {
            console.log(data)
            if (data.length > 0) {
                res.send({'status': 1000, 'message': 'Login successfully!', 'data': data});
            } else {
                res.send({'status': 1001, 'message': 'The account is not existed!', 'data': err});
            }
        }
    })
})

module.exports = router;