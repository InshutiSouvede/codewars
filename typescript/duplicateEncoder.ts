export function duplicateEncode(word: string){
    word = word.toLowerCase()
    return word.split('').map((el,i,arr)=>{
        if(word.indexOf(el)===word.lastIndexOf(el)){
          return '\('
        }else{
          return '\)'
        }
      }).join('')
  }