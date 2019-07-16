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
    console.log(req.body);
    modelMathers.save(req.body).then(result=>{
        res.json(result)
    });
});

module.exports = router;
