function myParseInt(str) {
  
    let arr =['1','2','3','4','5','6','7','8','9','0']
    const nums =  str.toString().trim().split('').filter((el)=>{
      if(el!=0 && !el){ return false}
      else return arr.includes(el)
    })
    if(nums.length==str.trim().length) return parseInt(str)
    return NaN
}