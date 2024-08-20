function stringIntGreaterThan(a, b) {
    const aLength = a.length, bLength = b.length
    if(Math.max(aLength,bLength)>10&&aLength==bLength){
      return Number(a.slice(0,aLength/2))>Number(b.slice(0,bLength/2))
      ||(Number(a.slice(0,aLength/2))==Number(b.slice(0,bLength/2))&& Number(a.slice(aLength/2))>Number(b.slice(bLength/2)))
    }
    return Number(a)>Number(b)
  }