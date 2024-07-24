function reverseLetter(str) {
    const strNoSpecialCharsOrNumbers = str.split('').filter((el)=>el.charCodeAt()>=97 && el.charCodeAt()<=122)
    return strNoSpecialCharsOrNumbers.reverse().join('')
  }