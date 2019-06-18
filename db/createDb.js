var mysql = require('mysql')
var crypto = require('crypto')
var db = require('./dbConfig').dbConfig
var table = require('./dbTable').table
var connection = mysql.createConnection(db);

function md5(data){
    var hash = crypto.createHash('md5');
    return hash.update(data).digest('hex');
}

connection.connect(function(err) {
    if (err) {
        console.error('连接错误: ' + err.stack);
        return;
    }
    // console.log('连接ID ' + connection.threadId);
});

connection.query('CREATE DATABASE IF NOT EXISTS ZCN_DB DEFAULT CHARSET utf8 COLLATE utf8_general_ci',function(err, rows){
    if(err){
        console.log(err)
    }
    db.database = 'zcn_db'
    connection = mysql.createConnection(db)
    table.forEach(function(e){
        connection.query(e,function(err, rows){
            if(err){
                console.log(err)
            }
        })
    })
})
setTimeout(function(){
    connection.query("INSERT INTO zcn_user(user_name, password, create_date) VALUES ('admin', md5('123456'), NOW())")
},1000)
// var pool = mysql.createPool(db)
// function query(sql, arr, callback){
//     //建立链接
//     pool.getConnection(function(err,connection){
//         if(err){throw err;return;}
//         connection.query(sql,arr,function(error,results,fields){
//             //将链接返回到连接池中，准备由其他人重复使用
//             connection.release();
//             if(error) throw error;
//             //执行回调函数，将数据返回
//             callback && callback(results,fields);
//         })
//     })
// }
// query('CREATE DATABASE ZCN_DB',[],function (error, results, fields){
//     console.log('error=',error)
//     console.log('results=',results)
//     console.log('fields=',fields)
// })
