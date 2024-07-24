function moveZeros(arr) {
    const res = []
    for( let i= arr.length-1;i>=0;i--){
      if(arr[i]===0){
      res.push(arr[i])
      }else{
        res.unshift(arr[i])
      }
    }
    return res
  }