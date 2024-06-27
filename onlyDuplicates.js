const  onlyDuplicates = (str)=>str.split('').map((el,i,arr)=>{
    if(arr.indexOf(el)!=arr.lastIndexOf(el)){
      return el
    }    
  }).join('')