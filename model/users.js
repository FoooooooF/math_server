/*
 * @Description: In User Settings Edit
 * @Author: hxl
 * @Date: 2019-07-13 12:38:16
 * @LastEditTime: 2019-08-10 12:15:02
 * @LastEditors: Please set LastEditors
 */
const Sequelize = require("./sequelize")
// const Mather=require("./models/mather")
let user=Sequelize.import("./models/user")
function getAll(){
    console.log("this get all")
    return user.findAll()
}

async function  getOne(name){
    return await user.findAll(
        {
            'where': {'name':name}
        }
    )
}
function save(body){
    return user.create(body)
}
function deleteOne(id){
    // var sql=`DELETE FROM user WHERE user.id = ${id}`
    return user.destroy({
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
