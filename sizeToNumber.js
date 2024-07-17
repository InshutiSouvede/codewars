function sizeToNumber(sizes) {
    const size = [...sizes]
    if(!sizes || !size.every((el)=>/[lmxs]/gi.test(el))|| !sizes.match(/[lms]/gi) ) return null
    if(size.includes('m')&& size.length!=1) return null
    if(size.includes('s')&& size.length>1){
      if(size.indexOf('s')!=size.length-1) return null
    }
    if(size.includes('l')&& size.length>1){
      if(size.indexOf('l')!=size.length-1) return null
    }
    if(size.includes('m')) return 38
    if(size.includes('s')) return 36-(2*(size.length-1))
    if(size.includes('l')) return 40+(2*(size.length-1))
  }