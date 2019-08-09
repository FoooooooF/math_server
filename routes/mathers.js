/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-13 11:58:46
 * @LastEditTime: 2019-08-09 22:09:38
 * @LastEditors: Please set LastEditors
 */
var express = require('express');
var router = express.Router();
var modelMathers = require('../model/mathers');
/* GET mathers */
router.get('/', function(req, res, next) {
   modelMathers.getAll().then(result=>{
        res.json(result)
    });
});
router.get('/:id', function(req, res, next) {
    console.log(modelMathers.getOne(req.params.id));
    modelMathers.getOne(req.params.id).then(result=>{
        res.json(result)
    });
});

//删除
router.delete('/:id', function(req, res, next) {
    console.log(modelMathers.getOne(req.params.id));
    modelMathers.deleteOne(req.params.id).then(result=>{
        res.json(result)
    });
});

//保存
router.post('/', function(req, res, next) {
    modelMathers.save(req.body).then(result=>{
        res.json(result)
    });
});

module.exports = router;
