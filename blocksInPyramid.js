function numBlocks(w, l, h) {
    w = BigInt(w); l=BigInt(l); h = BigInt(h)
    const one=BigInt(1), two = BigInt(2),six = BigInt(6)
   return  BigInt(l*w*h + l*(h-one)*h/two + w*(h-one)*h/two + (h-one)*h*((two*h)-one)/six)
  
  }