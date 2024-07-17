export function findShort(s: string): number {
    let min:number = s.length
    const sArray:string[] = s.split(' ')
    sArray.forEach((word)=>{
      if(word.length<min) min = word.length
    })
    return min;
}