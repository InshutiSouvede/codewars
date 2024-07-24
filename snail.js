snail = function(array) {
    if(array.flat().length===0) return []
   const res = []
   let r=0,beginr=0, endr=array.length,c = 0,beginc = -1, endc = array[0].length
   while(endc>=beginc  && endr>=beginr){
  //    Move to right but not the last elt
     while(c<endc){
      if(c==endc-1){
        break;
      }
       res.push(array[r][c])     
       c++
     }
     endc--
     
     //    Move to bottom but not the last elt
     while(r<endr){
       if(r==endr-1){
         break;
       }
       res.push(array[r][c])
       r++
     }
     endr--
     
     //    Move to left but not the last elt
      while(c>beginc){
        if(c==beginc+1){
         break;
       }
        res.push(array[r][c])
       c--
     }
     beginc++
     //    Move to top but not the last elt
     while(r>beginr){
       if(r==beginr+1){
         break;
       }
       res.push(array[r][c])
       r--
     }
     beginr++ 
   }
  //   Add the last elt
    res.push(array[r][c])
    return res
  }