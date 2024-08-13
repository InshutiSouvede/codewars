function toUnderscore(string) {
    string = string.toString()
    string = string[0].toLowerCase()+ string.slice(1)
     let res =""
     for (const char of string){
       if(char!== char.toLowerCase()){
         res +="_"
       }
       res+=char.toLowerCase()      
     }
     return res
   }