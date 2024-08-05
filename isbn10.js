function validISBN10(isbn) { 
    if(isbn.length!==10) return false
    
    if(isNaN(isbn.slice(0,isbn.length-1))) return false
    
    const lastChar = isNaN(isbn.slice(0,isbn.length-1))
    if(isNaN(lastChar) && lastChar!== 'X') return false
    
     const sum = isbn.split('').reduce((ac,cv,i)=>{
       return cv=='X'?ac +(10*(i+1)): ac+ (+cv*(i+1))
     },0)
     return sum%11===0
  }