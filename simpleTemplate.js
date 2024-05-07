function createTemplate(template){
    return function (valObj){
      let t ='',obj = {}
    let tmpArr = template.split(' ')
      for(const tmp of tmpArr){
      if(tmp.startsWith('\{\{')&&tmp.endsWith('\}\}')){
        let str = tmp.slice(2,tmp.length-2)
        t += " "+(valObj[str]!= undefined ? valObj[str]:'')
        obj[str] = valObj[str]!= undefined?valObj[str]:''
      } 
      else{
        t +=" "+tmp
      }
    }
    return t[0]==' '?t.slice(1):t;
   }
  }