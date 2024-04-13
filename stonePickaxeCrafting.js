function stonePick(arr) {
    let stk = arr.filter((el)=>el =='Sticks')
    let cbbl = arr.filter((el)=>el =='Cobblestone')
    let wd = arr.filter((el)=>el =='Wood')
    
  //   stk =  wd.length || stk.length?  (wd.length*4) + (stk.length) 
  //   : stk.length? stk.length
  //   :0
    stk = (wd.length*4) + (stk.length)
    
    cbbl = cbbl.length //?cbbl.length:0
    //console.log(cbbl)
    
    let ans = 0
    if(stk *3 == cbbl*2){
      // get the integer value of any decimal returned from division
      ans = Number.parseInt(stk/2)
    } else if(stk *3 > cbbl*2){
      ans = Number.parseInt(cbbl/3)
    }
    else{
      ans= Number.parseInt(stk/2)
    }
    return ans;
  }