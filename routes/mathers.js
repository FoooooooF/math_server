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

module.exports = router;
