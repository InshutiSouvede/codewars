function continuedFraction(numerator,denominator) {
    let n = numerator,arr=[],d = denominator
    if(n!=0){
     while (d>0){
      let q = Math.floor(n/d)
      let r = n-q*d
      arr.push(q)      
      n = d
      d = r
    }
    }
    return arr;
  }