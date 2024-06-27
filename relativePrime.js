function relativelyPrime(n, arr) {
    if(n==1) return arr
    
    let res=arr
    arr.forEach((el,i)=>{
      
      if(el%n == 0){
        delete res[i]
      }else{
      for(let j = 2;j<=n/2 && j<=res[i];j++){
        if(n%j==0 && el%j == 0){
          delete res[i]
        }
      }   
      
      }
    })
    return res.flat()  
  }