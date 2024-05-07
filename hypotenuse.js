function calculateHypotenuse(a,b){
    if(typeof a!='number'||typeof b!='number'|| isNaN(a)||isNaN(b)|| a<0||b<0){
      const err = new Error("Invalid input")
      err.code = 'ArgumentException'
      throw err
    }
  return (( a**2 +b**2)**0.5).toFixed(3)
  }