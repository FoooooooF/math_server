var execution=require("./execution");
function getAll(res){
    execution(`SELECT * FROM mather`,res)
}
function getOne(res,id){
    execution(`SELECT * FROM mather WHERE id=${id}`,res)
}
module.exports = {
    getAll,
    getOne
};