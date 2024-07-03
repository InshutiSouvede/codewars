function sumNoDuplicates(numList) {
    let sum =0
    numList.forEach((el,i,arr)=>{
      if(arr.indexOf(el)===arr.lastIndexOf(el)){
        sum +=el
      }
    })
    return sum;
  }