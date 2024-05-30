function order(words){
    if(!words) return ""
    let arr = words.split(' '),resArr =[]
    arr.forEach((el)=>{
      const i = el.split('').reduce((ac,cv)=> ac = !isNaN(cv)?cv:ac )
      resArr[i] = el
    })
    return resArr.flat().join(' ')
}