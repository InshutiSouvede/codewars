function gHappy(str) {
    return str.split('').every((el,i,arr)=>{
      if(el=='g'){
        return arr[i-1]=='g'||arr[i+1]=='g'
      }
      return true
    })
}