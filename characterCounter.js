function validateWord(str)
{
let s = str.toLowerCase()
const occurences ={}
 for(i=0;i<s.length;i++){
   if(occurences[s[i]]){
     occurences[s[i]] += 1
   }else{
     occurences[s[i]] = 1
   }
 }
  let allv = Object.values(occurences)
 return allv.every((el)=>el==allv[0])
}