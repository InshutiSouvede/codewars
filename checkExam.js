function checkExam(array1, array2) {
    let marks = 0
    array1.forEach((el,i,arr)=>{
      if(!array2[i]) marks = marks
      else if(array2[i]!=el) marks--;
      else {
        marks +=4
      }
    })
    return marks<0?0:marks
}