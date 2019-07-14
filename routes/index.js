var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('timeline', {
        title: 'timeline'
    });
});

router.get('/timeline', function (req, res, next) {
    res.render('timeline');
});


module.exports = router;