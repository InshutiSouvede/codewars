function summation(n){
    let counter =n
    while(n>1){
      n--
      counter +=n;    
    }
    return counter
  }
  function frogContest(n) {
    const chris = summation(n)
    const tom = summation(Math.floor(chris/2))
    const cat = summation(chris+tom)
    return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`
  }