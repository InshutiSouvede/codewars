function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((ac,cv)=>+ac+ +cv,0)
}