function luckCheck(ticket){
    if(ticket == ''|| ticket.includes(" ") ||isNaN(ticket) || parseInt(ticket)!== parseFloat(ticket)  ) throw "should be a number"
    const ticketLength = ticket.length
    ticket = ticket.split('')
    if(ticketLength%2===0){
      
      const sum1 = ticket.slice(0,ticketLength/2).reduce((ac,cv)=> +ac+ +cv)
      const sum2 = ticket.slice(ticketLength/2).reduce((ac,cv)=>+ac + +cv)
      return sum1 === sum2
    }else{
      const sum1 = ticket.slice(0,(ticketLength-1)/2).reduce((ac,cv)=>+ac + +cv)
      const sum2 = ticket.slice((ticketLength+1)/2).reduce((ac,cv)=>+ac + +cv)
      return sum1 === sum2
    }
  }