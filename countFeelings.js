function countFeelings(string, array) {
    let counter =0
    array.forEach((el)=>{
      if(el.split('').every((el1)=>string.includes(el1))){
        counter ++
      }
    })
   return `${counter} ${counter==1?'feeling.':'feelings.'}`
}