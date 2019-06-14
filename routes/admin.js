var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin', { title: '后台' });
});

router.post('/login',function(req,res){
    console.log('req=',req.body)
    console.log('res=',res.body)
    // res.end();
    res.redirect('/admin');
})

router.get('/addArticle',function(req,res){
    console.log('req=',req.body)
    console.log('res=',res.body)
    // res.end();
    res.render('addArticle',{ title: '新增文章'});
})

router.post('/addArticle',function(req,res){
    console.log('req=',req.body)
    console.log('res=',res.body)
    // res.end();
    res.render('addArticle',{ title: '新增文章'});
})

module.exports = router;
