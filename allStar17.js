function findYear(month, dayOfWeek){
    for(i=2014;i<=2050;i++){
      if(new Date(`${month+1} 1, ${i}`).getDay()===dayOfWeek){
        return i
      }  
    }
    return 0
  }