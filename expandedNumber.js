function expandedForm(num) {
    let res = ''
    const numArr = num.toString().split('').forEach((el,i,arr)=>{
      const expanded = el+'0'.repeat(arr.length-1-i)
      if(i==0) res += expanded
      else{
        
        if(parseInt(expanded)){
          res += " + "+expanded
        }
      }
    })
    return res
  }