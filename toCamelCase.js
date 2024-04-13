function toCamelCase(str){
    let res = ''
    if(str.length>1){
      res += str[0]
    for(i=0;i<str.length-1; i++){
      if(str[i]=='-'||str[i] == '_'){
        let su = str[i+1].toUpperCase()
       res += su
      }else{
        res += str[i+1]
      }
    }
    }else{
      res += str
    } 
    return res.replaceAll(/[-_]/gi,'');
  }