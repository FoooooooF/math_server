/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-26 11:49:14
 * @LastEditTime: 2019-08-10 12:08:30
 * @LastEditors: Please set LastEditors
 */
const express = require('express');
const router = express.Router();
const modelUsers = require('../model/users');
const controlUser = require('../controller/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query.name)
    if(req.query.name){
        console.log('getOne')
        modelUsers.getOne(req.query.name).then(data=>{
            res.json(data);
        })
    }else{
        modelUsers.getAll().then(data=>{
            res.json(data);
        })
    }
});
router.post('/', controlUser.postUserAuth);


module.exports = router;
