const multiplicationTable = function(size) {
    const res = []
    for(let i =1;i<=size;i++){
      const row = []
      for(let j =i; j<=size*i;j=j+i){
        row.push(j)  
      }
      res.push(row)
    }
    return res
  }