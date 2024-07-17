export function getSum(a: number, b: number): number {
    if( a>b){
      [a,b] = [b,a]
    }
    let sum:number = 0
    for(let i=a;i<=b;i++){
      sum +=i
    }
    return sum
}