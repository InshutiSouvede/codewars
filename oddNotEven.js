function isPrime(n){
    for(i=2;i<(n/2)+1;i++){
      if((n%i)==0){
        return false
      }
    }
    return true
  }
function oddNotPrime(n){
    count =1
    for(j=2;j<=n;j++){
      if(!isPrime(j) && (j%2)==1){
        count++;
      }
    }
    return count;
}
console.log((5/2)+1)