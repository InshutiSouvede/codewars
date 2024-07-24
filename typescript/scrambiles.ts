export function scramble(str1: string, str2: string): boolean {
    console.log(str1.length+str2.length)
    const str1Occ:Record<string,number>= {}
  //   keep trac of occurances
    for(let i = 0;i<str1.length;i++){
      if(!str1Occ[str1[i]]){
        str1Occ[str1[i]] = 1
      }else{
        str1Occ[str1[i]]++;
      }
    }
    
    for(let i = 0;i<str2.length;i++){
      if(!str1Occ[str2[i]]){
        return false
      }else{
        str1Occ[str2[i]]--;
      }
    }
    return true
  }