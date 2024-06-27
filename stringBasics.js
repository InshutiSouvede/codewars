function getUsersIds(str){
    return  str.replace(/#/g, '').split(',').map((el)=>el.trim().slice(3).trim().toLowerCase())
}