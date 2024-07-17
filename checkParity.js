function checkParity(parity, bin){
    const num = bin.split('').filter((el)=>+el===1).length
   return (num%2===0 && parity==='even')||num%2!=0 && parity==='odd'?0:1;
}