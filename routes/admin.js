var express = require('express');
var router = express.Router();
var modelMathers = require('../model/mathers');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/login', {
        title: 'login'
    });
});

router.get('/login', function (req, res, next) {
    res.render('admin/login', {
        title: 'login'
    });
});
router.get('/mathematic', function (req, res, next) {
    modelMathers.getAll().then(result=>{
        res.render('admin/mathematic', {
            title: 'login',
            list:result,
        });
    });
    
});


module.exports = router;