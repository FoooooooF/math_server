var express = require('express');
var router = express.Router();

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
    res.render('admin/mathematic', {
        title: 'login'
    });
});


module.exports = router;