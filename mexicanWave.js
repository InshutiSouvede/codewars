function wave(str){
    const res = []
    for(let i = 0;i<str.length;i++){
      if(str[i]===' ') {continue}
      
      const newStr = str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1)
      res.push(newStr)
    }
     return res
   }