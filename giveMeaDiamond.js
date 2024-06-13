function diamond(n){
    if(n%2===0||n<=0) return null
    let dia = ''; const tmp = 2*n
    for(i=1;i<=tmp;i+=2){
      let str = ''
      const j = i>n?tmp-i:i
      str = str.padStart(j,'*')
      str = str.padStart(((n-j)/2)+j,' ')
      dia += str+'\n' 
    }
    return dia;
  }