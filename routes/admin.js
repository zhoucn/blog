var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../db/dbConfig').dbConfig
db.database = 'zcn_db';
var connection = mysql.createConnection(db);
connection.connect(function(err) {
    if (err) {
        console.error('连接错误: ' + err.stack);
        return;
    }
    // console.log('连接ID ' + connection.threadId);
});

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
    // console.log('req=',req.body)
    // console.log('res=',res.body)
    // res.end();
    res.render('addArticle',{ title: '新增文章'});
})

router.post('/addArticle',function(req,res){
    console.log(req.body)
    var title = JSON.stringify(req.body.title);
    var summary = JSON.stringify(req.body.summary);
    var content = JSON.stringify(req.body.content);
    connection.query('INSERT INTO zcn_article (article_title, article_summary, article_content, create_date) VALUES (' + title + ',' + summary + ',' + content + ', NOW())',function(err,rows){
        if(err){
            console.log(err)
            return
        }
        res.end(200);
    })
})

module.exports = router;
