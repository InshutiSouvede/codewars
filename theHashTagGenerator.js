function generateHashtag (str) {
    let newStr ="" , triger = 0
    for(i=0;i<str.length;i++){
      if(str[i]==" "){
        triger= 1
      }else if(triger ==1 ){
        triger = 0
        newStr += str[i].toUpperCase()
        
      }
      else{newStr += str[i]}
    }
    return str==""||newStr.length>=140||newStr.length==0? false:"#"+newStr[0].toUpperCase()+newStr.slice(1)
  }