function countRepeats(str) {
    const res = [str[0]]
    let prev=str[0]
      for(const el of str){
        if(el!==prev){
          prev = el
          res.push(prev)
        }
      }
    
    return str.length-res.length
  }