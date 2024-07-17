export function sumDigits(n: number): number {
    return Math.abs(n).toString().split('').reduce((ac,cv)=>ac + +cv,0)
}