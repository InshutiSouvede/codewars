function alphabetized(s) {
    let res = '' 
    let sArray = s.split('')
    sArray.forEach((el)=>{
      const lowerEl = el.toLowerCase()
      const upperEl = el.toUpperCase()
      if(res.includes(lowerEl)){
        const index  = res.indexOf(lowerEl)+1
        const resArr = res.split('')
        resArr.splice(index,0,el)
        res = resArr.join('')
        
      } else if(res.includes(upperEl)){
        const index  = res.indexOf(upperEl)+1
        const resArr = res.split('')
        resArr.splice(index,0,el)
        res = resArr.join('')
        
      } else if(el.toLowerCase().charCodeAt()>=97 && el.toLowerCase().charCodeAt()<=122){
        
        res +=el
      }
    })
    res = res.split("").sort((a,b)=> a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt()).join('')
    return res
  }