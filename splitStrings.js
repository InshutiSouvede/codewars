function solution(str){
    const res = [];
  for(i=0;i<str.length;i=i+2){
    if(i+1>=str.length){
      const pair = str[i]+"_"
     res.push(pair)
    }else{
      const pair = str[i]+str[i+1]
    res.push(pair)
    }
    
  }
    return res
 }