function proofread (str) { 
    str = str.toLowerCase().replaceAll('ie','ei')
      const res = str.split('. ').map((el)=> el.slice(0,1).toUpperCase()+el.slice(1)).join('. ')
    
      return res
    
    } 
    
    
    proofread ("ShE deCIeved HiM.");