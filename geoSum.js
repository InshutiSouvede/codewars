function GeometricSequenceSum(a, r, n) {
    let counter = 1,res = a
    while(counter<n){
      a = a*r 
      res += a
      counter++
    }
    return res
  }