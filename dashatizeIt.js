function dashatize(num) {
    return Math.abs(num).toString().split('').map((el,i,arr)=>{
      return `${el%2!=0&&i!==0&&(arr[i-1]%2)==0?'-':''}${el}${el%2!=0&&i!==arr.length-1?'-':''}`
    }).join('')
  }