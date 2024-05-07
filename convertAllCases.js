function changeCase(identifier, targetCase){ 
    const cases = {snake:'_',camel:'',kebab:'-'}
    let str=[],tr=0
    if(!cases.hasOwnProperty(targetCase)||
       identifier.includes(cases.snake)&& identifier.includes(cases.kebab)||
       identifier.includes(cases.kebab)&& !identifier.split('').every((el)=>el==el.toLowerCase())||
       identifier.includes(cases.snake)&& !identifier.split('').every((el)=>el==el.toLowerCase() )) {
       return undefined
       }
     if(targetCase == 'camel'){
       str = identifier.split('').map((el)=>{
         if (el== cases.snake||el==cases.kebab){
           tr =1
           return ""
         }else if(tr==1){
           tr=0
           return el.toUpperCase()
         }else{
           return el
         }
       })
      return str.join('')
     }else if(targetCase == 'kebab'){
      str =identifier.split('').map((el)=>el==cases.snake?"-":(el == el.toUpperCase()&& el!== cases.kebab)?'-'+el.toLowerCase():el)
      return str.join('')
     }else if(targetCase == 'snake'){
      str =identifier.split('').map((el)=>el== cases.kebab?"_":(el == el.toUpperCase()&& el!== cases.snake)?'_'+el.toLowerCase():el)
      return str.join('')
     }
  }