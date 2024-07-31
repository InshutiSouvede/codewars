function firstNonRepeatingLetter(s) {
    const sameCaseS = s.toLowerCase()
    const res = sameCaseS.split('').findIndex((el,i,arr)=>arr.indexOf(el)===arr.lastIndexOf(el))
    return res!==-1?s[res]:''
}