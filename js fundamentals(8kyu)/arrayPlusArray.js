const arrayPlusArray = (arr1, arr2) =>{
    return [...arr1,...arr2].reduce((ac,cv)=>ac+cv,0); //something went wrong
  }