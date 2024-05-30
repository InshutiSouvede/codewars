function sortArray(array) {
  
    let odd = array.filter((el)=>Math.abs(el)%2==1).sort((a,b)=>a-b),counter =-1  
    return array.map((el,i)=>{
      if(Math.abs(el)%2==1) {
        counter++
        return odd[counter]
      }
      return el
    })
  }