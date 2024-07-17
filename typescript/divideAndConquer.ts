export function divCon(x: (string | number)[]): number {
    return x.reduce((ac:number,cv:number|string)=>{
      return typeof cv === 'number'?ac+cv:ac - +cv
  },0)
}