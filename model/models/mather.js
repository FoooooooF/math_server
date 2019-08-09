/*
 * @Description: mathematics table model
 * @Author: hxl
 * @Date: 2019-08-09 21:20:12
 * @LastEditTime: 2019-08-09 21:22:56
 * @LastEditors: Please set LastEditors
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('mather', {
        id: {
            type: DataTypes.INTEGER(16),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name_cn: {
            type: DataTypes.STRING(32),
            allowNull: true
        },
        information: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        avatar: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        name_en: {
            type: DataTypes.STRING(32),
            allowNull: true
        },
        year_die: {
            type: DataTypes.INTEGER(8),
            allowNull: true
        },
        year_born: {
            type: DataTypes.INTEGER(8),
            allowNull: true
        },
        achievement: {
            type: DataTypes.STRING(128),
            allowNull: true
        }
    }, {
        tableName: 'mather'
    });
};
