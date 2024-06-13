function flickSwitch(arr){
    let res = true
    return arr.map((el,i)=>{
      if(el==='flick'){
        res = !res
      }
      return res
    })
}