function trilingualDemocracy(group) {
    //   split the letters
      let ltrs = group.split(''), langs = ['D', 'F', 'I', 'K']
    
    // record each character once
    const occs = [];
        for(i=0;i<ltrs.length;i++){
            if(occs.indexOf(ltrs[i])!=-1){
              let ind =occs.indexOf(ltrs[i])
              return i-ind==2? ltrs[1]: i==2?ltrs[0]:ltrs[2]
            }else{
              occs.push(ltrs[i])
            }
        }
        return langs.filter((el)=>!occs.includes(el)).toString()
}