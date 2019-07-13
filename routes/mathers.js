var express = require('express');
var router = express.Router();
var modelMathers = require('../model/mathers');
/* GET mathers */
router.get('/', function(req, res, next) {
    modelMathers.getAll(res);
});
router.get('/:id', function(req, res, next) {
    // res.send(JSON.stringify(req))
    console.log(req.params.id)
    modelMathers.getOne(res,req.params.id);
});

module.exports = router;
