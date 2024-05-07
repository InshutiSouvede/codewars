// input: names - unsorted strings
// output: case-agnostic sort
sortme = ( names )=>{
    let sorted=[], lower = Array.from(names,name=>name.toLowerCase()).sort()  
    names.forEach((el)=>{const i = lower.indexOf(el.toLowerCase()); sorted[i]= el; delete lower[i]; })
   return sorted
}