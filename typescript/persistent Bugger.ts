export function persistence(num: number): number {
    let str = num.toString(),counter = 0
    while(str.length>1){
      const sum = str.split('').reduce((ac,cv:string)=>ac * +cv,1)
      str = sum.toString()
      counter++
    }
   return counter  
   }