function divCon(x){
    const n = x.reduce((ac,cv)=>{
      if(typeof cv === 'number') return ac+cv
      return ac - +cv  
    },0)
      return n
}