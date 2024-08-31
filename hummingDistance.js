function hamming(a, b) {
	return a.split("").reduce((ac,cv,i)=>{
    return cv!= b[i]?ac+1:ac
  },0)
}