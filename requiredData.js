function givenNthValue(arr, k, str){
    if (arr.length == 0) return "No values in the array"
    if(typeof k != 'number') return "Incorrect value for k"
    
    let narr = Array.from(new Set(arr)) 
    if(!narr.every((el)=>typeof el == 'number')) return "Invalid entry list"
    if (str.toLowerCase()=="min"){
       narr.sort((a,b)=>a-b)
    }
    else if(str.toLowerCase()== "max") {
      narr.sort((a,b)=>b-a)
    }else{
      return "Valid entries: 'max' or 'min'"
    }
    
    return k>narr.length?"No way": narr[k-1]
  }