function queueTime(customers, n) {
    if(!customers.length) return 0
    
    const ques = new Array(n).fill(0);
    
    for(const customer of customers){    
      const queIndex  = ques.indexOf(Math.min(...ques))
      ques[queIndex] += customer 
    }
    return Math.max(...ques)
  }