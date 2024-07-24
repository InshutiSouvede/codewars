function cleverSplit(s){
    if(s.split(" ").length == 1){
      return s.split(" ")
    }
    const res = []
    let tmp = '',i=0
    while(i<s.length){
      if(s[i]==' ' &&tmp){
        res.push(tmp)
        tmp = ''
        i++
        continue
      }
      if(s[i]){      
        if(s[i]==='['){
          const rem = s.slice(i)
          tmp = rem.slice(0,rem.indexOf(']')+1)
          i = s.indexOf(']')!=-1? i+rem.indexOf(']')+2:i+2
          res.push(tmp)
          tmp = ''
        }else{
          tmp +=s[i]
          i++
        }
      }
    }
    if (tmp) res.push(tmp)
    return res
  }