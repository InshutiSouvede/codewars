const sequenceSum = (begin, end, step) => {
    let sum = 0,st=begin
    for(i=begin; i<=end;i+=step){
      sum +=st
      st +=step
    }
    return sum
  };