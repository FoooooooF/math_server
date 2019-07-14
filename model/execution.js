var mysql = require('mysql');

//async 版本
// async function execution(sql) {
//     var connection = mysql.createConnection({
//         host: '127.0.0.1', //主机
//         user: 'root', //MySQL认证用户名
//         password: '', //MySQL认证用户密码
//         port: '3306', //端口号
//         database: 'math', //选择数据库
//     });
//     //创建一个connection
//     connection.connect(function (err) {
//         if (err) {
//             console.log('[query] - :' + err);
//             return;
//         }
//         console.log('[connection connect]  succeed!');
//     });
//     //执行SQL语句
//     var result=await connection.query(sql, function (err, rows, fields) {
//         if (err) {
//             console.log('[query] - :' + err);
//             return;
//         }
//         return rows
//     });
//     //关闭connection
//     connection.end(function (err, result) {
//         if (err) {
//             return;
//         }
//         console.log('[connection end] succeed!');
//     });
//     return result;
// }

//promsie版本
function execution(sql) {
    return new Promise((resolve,reject)=>{
        var connection = mysql.createConnection({
            host: '127.0.0.1', //主机
            user: 'root', //MySQL认证用户名
            password: '', //MySQL认证用户密码
            port: '3306', //端口号
            database: 'math', //选择数据库
        });
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