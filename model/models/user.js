/*
 * @Description: mathematics table model
 * @Author: hxl
 * @Date: 2019-08-09 21:20:12
 * @LastEditTime: 2019-08-09 21:23:23
 * @LastEditors: Please set LastEditors
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER(16),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        tableName: 'user'
    });
};
