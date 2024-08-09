function toNato(words) {
    const res = words.split('').map((el)=>{
      el = el.toUpperCase()
      
      if(NATO[el]) return NATO[el]
      
      return el
    })
    return res.filter(el=> el!== ' ').join(' ');
  }