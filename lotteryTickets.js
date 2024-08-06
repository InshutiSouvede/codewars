function bingo(tickets, win){
    let counter = 0
    for(const ticket of tickets){
      const minwinner = String.fromCharCode(ticket[1])
      if(ticket[0].indexOf(minwinner)!=-1){
        counter ++;
      }
    }
    return counter>=win?"Winner!":"Loser!"
    }