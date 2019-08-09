/*
 * @Description: connect db
 * @Author: your name
 * @Date: 2019-08-09 21:07:19
 * @LastEditTime: 2019-08-09 21:49:17
 * @LastEditors: Please set LastEditors
 */
const Sequelize = require('sequelize');
var sequelize = new Sequelize(
    'math', // 数据库名
    'root',   // 用户名
    '',   // 用户密码
    {
        'dialect': 'mysql',  // 数据库使用mysql
        'host': 'localhost', // 数据库服务器ip
        'port': 3306,        // 数据库服务器端口
        define: {
            timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
        }
    }
);
module.exports=sequelize;
