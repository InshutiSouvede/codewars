function gettingMad(array) {
    let mad = 0
    array.forEach((el,i,arr)=>{    
      const tmpArr = [...arr.slice(0,i),...arr.slice(i+1)]
      const tmp = tmpArr.reduce((ac,cv)=>{
        const dif = Math.abs(el-cv)
        ac = ac>dif?dif:ac
        return ac
      },Math.abs(el - tmpArr[0]))
      mad =( i==0)||mad>tmp?tmp:mad
    })
    return mad;
}