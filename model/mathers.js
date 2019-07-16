var execution=require("./execution");
function getAll(){
    return execution(`SELECT * FROM mather`)
}
function getOne(id){
    return execution(`SELECT * FROM mather WHERE id=${id}`)
}
function save(body){
    var sql=`INSERT INTO mather (id, name_cn, information, avatar, name_en, year_die, year_born, achievement) VALUES 
    (NULL, '${body.name_cn}', '${body.information}', '${body.avatar}', '${body.name_en}', '${body.year_die}', '${body.year_born}', '${body.achievement}')`
    console.log(sql);
    return execution(sql)
}
function deleteOne(id){
    var sql=`DELETE FROM mather WHERE mather.id = ${id}`
    return execution(sql)
}


module.exports = {
    getAll,
    getOne,
    save,
    deleteOne
};