function solution(string) {
    let s = ''
    string.split('').forEach((el)=>{
      if(el===el.toUpperCase()){
        s+=' '
      }
      s += el
    })
    return s;
}