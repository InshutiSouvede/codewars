function count(string) {
    const res = {}
    string.split('').forEach((el)=>{
      if(res[el]){
        res[el]++;
      }else{
        res[el] = 1
      }
    })
    return res
  }