export function alphabetPosition(text:string):string {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    text = text.toLowerCase()
    const res:number[] = [] 
    text.split('').forEach((el)=>{
      const i = alphabet.indexOf(el)
      if(i!==-1){
        res.push(i+1)
      }
    })
    return res.join(' ');
  }