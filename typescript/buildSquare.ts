export function generateShape(int: number): string {
    let res:string = ''
    for(let i:number =0;i<int;i++){
      for(let j:number =0;j<int;j++){
        res +='+'
      }
      res = i<int-1?res+'\n':res
    }
    return res; // your code here
}