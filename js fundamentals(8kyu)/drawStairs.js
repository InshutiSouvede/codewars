function drawStairs(n) {
    let res= ''
    for(i=0;i<n-1;i++){
      res+='I\n'
      for(j=0;j<=i;j++){
        res +=' '
      }
      
    }
    return res?res+'I':'I'
  }