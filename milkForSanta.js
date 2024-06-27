function timeForMilkAndCookies(date){
    //   const dateArr = date.toString().split(' ')
    //   return  dateArr[1]=='Dec' && dateArr[2] === '24'
      return date.getDate() === 24 && date.getMonth() ===11
}