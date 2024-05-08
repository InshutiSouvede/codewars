Array.prototype.sort = function () {
    let elts = this
    for(let i=0;i<elts.length;i++){
      for(let j=i+1;j<elts.length;j++){
        if(elts[j]<elts[i]){
          [elts[j],elts[i]] = [elts[i],elts[j]]
        }
      }
    }
    return elts
  }