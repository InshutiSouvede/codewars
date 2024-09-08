function createArrayOfTiers(num) {
    const arr = []
    const numStr = num.toString()
    arr.push(numStr[0])
    numStr.split('').reduce((ac,cv,i)=>{
      ac = ac+cv
      arr.push(ac)
      return ac
    })
    return arr
  }