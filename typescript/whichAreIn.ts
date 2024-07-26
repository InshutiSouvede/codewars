export function inArray(a1: string[], a2: string[]): string[] {
    const a2String = a2.join('+'), res:string[]=[]
    a1.forEach((el)=>{
      if(a2String.includes(el)){
        res.push(el)
      }
    })
    return res.sort()
}