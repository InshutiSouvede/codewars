export function findUniq(arr: number[]): number {
    return arr.find((el:number)=>arr.indexOf(el) ===  arr.lastIndexOf(el)) as number;
  }