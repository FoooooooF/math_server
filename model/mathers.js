var execution=require("./execution");
function getAll(){
    return execution(`SELECT * FROM mather`)
}
function getOne(id){
    return execution(`SELECT * FROM mather WHERE id=${id}`)
}
module.exports = {
    getAll,
    getOne
};