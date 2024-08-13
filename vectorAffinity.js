function vectorAffinity(xs,ys) {
    if(xs.length===0 && ys.length===0) return 1
    let count = 0
      xs.forEach((el,i)=>{
        if(el === ys[i]){
          count++
        }
      })
    return xs.length>ys.length?count/xs.length:count/ys.length;
  }