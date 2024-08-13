function incrementString (strng) {
    let hasNumber = 0
    for(i=0;i<strng.length;i++){
      let endNum = parseInt(strng.slice(i))
      let lastPart = strng.slice(i)
      
      if(strng.endsWith(endNum) && !isNaN(lastPart)){
        const initialLength = strng[i]==0? strng.length-i :endNum.toString().length
        endNum++
        const finalLength = endNum.toString().length
        
        const charPart = strng.length - finalLength 
        strng = finalLength <= initialLength? strng.slice(0,charPart) + endNum :strng.slice(0,charPart+1) +endNum
        hasNumber = 1
        break
      }
        
    }
    return hasNumber? strng: strng+1
  }