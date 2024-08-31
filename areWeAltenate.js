function isAlt(word) {
    return word.split("").every((el,i,arr)=>{
      return (/[aeiou]/g.test(el) && !/[aeiou]/g.test(arr[i+1]))||
        (!/[aeiou]/g.test(el) && /[aeiou]/g.test(arr[i+1])) || !arr[i+1]
    })
}