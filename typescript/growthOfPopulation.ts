export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
    let res:number = 0, I :number= p0
    while(I<p){
      I += Math.floor(I*percent/100)+aug
      res++
    }
    return res
}