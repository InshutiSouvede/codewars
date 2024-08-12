function sumStrings(a,b) { 
    let res ='',kept = 0
    if(a.length < b.length){
      a = '0'.repeat(b.length-a.length)+a
    }else if(a.length > b.length){
      b = '0'.repeat(a.length-b.length)+b
    }
    
    for(i=a.length-1;i>=0;i--){
       const sum = +a[i]+ +b[i] +kept
       res = sum%10 +res
       kept =Math.floor(sum/10)   
    }
    
    res = kept+res
  //   Remove any starting zeros
    res = res.replace(new RegExp(`^${0}+`), '')
    return res;
  }