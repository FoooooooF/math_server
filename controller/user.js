/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 11:45:23
 * @LastEditTime: 2019-08-10 12:40:35
 * @LastEditors: Please set LastEditors
 */
const jwt = require("jsonwebtoken");
const user = require('../model/users.js');

async function getUserInfo() {
    let id = this.params.id; // 获取url里传过来的参数里的id
    let result = await user.getUserById(id); // 通过yield “同步”地返回查询结果
    this.body = result // 将请求的结果放到response的body里返回
}

async function postUserAuth(req,res,next) {
    let data = req.body; // post过来的数据存在request.body里
    let result = await user.getOne(data.name);
    userInfo=result[0].dataValues
    // console.log(userInfo)
    if (userInfo != null) { // 如果查无此用户会返回null
        if (userInfo.password != data.password) {
            res.json(
                {
                    success: false, // success标志位是方便前端判断返回是正确与否
                    info: '密码错误！'
                }
            )
        } else { // 如果密码正确
            let userToken = {
                name: userInfo.user_name,
                id: userInfo.id
            }
            let secret = 'express-math'; // 指定密钥，这是之后用来判断token合法性的标志
            let token = jwt.sign(userToken, secret,{expiresIn : 60 * 60 * 24 }); // 签发token
            res.json({
                success: true,
                token: token, // 返回token
            })
        }
    } else {
        res.json({
            success: false,
            info: '用户不存在！' // 如果用户不存在返回用户不存在
        })
    }
}

module.exports = {
    getUserInfo,
    postUserAuth
}
