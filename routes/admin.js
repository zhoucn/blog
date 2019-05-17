var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin', { title: 'Express111' });
});
router.post('/login',function(req,res){
    console.log('req=',req.body)
    console.log('res=',res.body)
    // res.end();
    res.redirect('/admin');
})

module.exports = router;
