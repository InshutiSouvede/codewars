function beggars(values, n){
    if(n<=0) return []
    if(values.length<n){
      for(i=values.length;i<n;i++){
        values.push(0)
      }
      return values
    }
    const res = new Array(n), rm = (values.length)%n, q = Math.floor(values.length/n)
    for(i=0;i<q*n; i +=n){
      for(j=0;j<n;j++){
        if(!res[j]){
          res[j] = values[i+j]
        }else{
          res[j] += values[i+j]
        }      
      }
    }
    for(i=0;i<rm;i++){
        res[i] += values[(q*n)+i]
    }
    return res 
    
  }