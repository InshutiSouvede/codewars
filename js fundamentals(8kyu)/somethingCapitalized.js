function testit(s){
    return !s?s:s.split(' ').map((el)=>el.slice(0,el.length-1)+el[el.length-1].toUpperCase()).join(' ')
}