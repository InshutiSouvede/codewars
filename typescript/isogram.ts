export function isIsogram(str: string): boolean{
    str = str.toLowerCase()
   return str.split('').every((el)=>str.indexOf(el)=== str.lastIndexOf(el))
}