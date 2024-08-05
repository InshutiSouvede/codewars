function firstDup (s) {
    return s.split('').find((el)=>el&&s.indexOf(el)!==s.lastIndexOf(el))
  }