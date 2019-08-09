/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-13 12:37:09
 * @LastEditTime: 2019-08-09 20:58:37
 * @LastEditors: Please set LastEditors
 */
var mysql = require('mysql');

console.log("Node Enviroment: "+ process.env.NODE_ENV);
var dbConf=null;
if (process.env.NODE_ENV === 'development'){
    dbConf={
        host: '127.0.0.1', //主机
        user: 'root', //MySQL认证用户名
        password: '', //MySQL认证用户密码
        port: '3306', //端口号
        database: 'math', //选择数据库
    }
}else if (process.env.NODE_ENV === 'production'){
    dbConf={ //假的
        host: '00.00.00.00', //主机
        user: 'root', //MySQL认证用户名
        password: '', //MySQL认证用户密码
        port: '3306', //端口号
        database: 'math', //选择数据库
    }
}
//promsie版本
function execution(sql) {
    return new Promise((resolve,reject)=>{
        var connection = mysql.createConnection(dbConf);
        //创建一个connection
        connection.connect(function (err) {
            if (err) {
                console.log('[query] - :' + err);
                reject(err);
                return;
            }
            console.log('[connection connect]  succeed!');
        });
        //执行SQL语句
        connection.query(sql, function (err, rows, fields) {
            if (err) {
                console.log('[query] - :' + err);
                reject(err);
                return;
            }
            resolve(rows);
            // res.json(rows);
        });
        //关闭connection
        connection.end(function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            console.log('[connection end] succeed!');
        });
    })
    
}
module.exports = execution;