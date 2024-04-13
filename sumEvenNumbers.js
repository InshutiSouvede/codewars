function sumEvenNumbers(input) {
    return input.reduce((acc,cv,)=>cv%2 != 0?acc:acc+cv,0)
  }