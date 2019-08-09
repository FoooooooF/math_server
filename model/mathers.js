/*
 * @Description: In User Settings Edit
 * @Author: hxl
 * @Date: 2019-07-13 12:38:16
 * @LastEditTime: 2019-08-09 22:15:48
 * @LastEditors: Please set LastEditors
 */
const Sequelize = require("./sequelize")
// const Mather=require("./models/mather")
let mather=Sequelize.import("./models/mather")
function getAll(){
    console.log("this get all")
    return mather.findAll()
}
function getOne(id){
    return mather.findAll(
        {
            'where': {'id':[id]}
        }
    )
}
function save(body){
    // var sql=`INSERT INTO mather (id, name_cn, information, avatar, name_en, year_die, year_born, achievement) VALUES
    // (NULL, '${body.name_cn}', '${body.information}', '${body.avatar}', '${body.name_en}', '${body.year_die}', '${body.year_born}', '${body.achievement}')`
    // console.log(sql);
    // return execution(sql)
    // console.log(body);
    return mather.create(body)
}
function deleteOne(id){
    // var sql=`DELETE FROM mather WHERE mather.id = ${id}`
    return mather.destroy({
        'where':{
            'id':id
        }
    });
}


module.exports = {
    getAll,
    getOne,
    save,
    deleteOne
};
