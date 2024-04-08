function rpsls(pl1,pl2){
    pl1 = pl1.toLowerCase(), pl2 = pl2.toLowerCase()
    let order = {
      scissors:["paper","lizard"],
      paper:["rock","spock"],
      rock:["lizard","scissors"],
      lizard:["spock","paper"],
      spock:["scissors","rock"]
    }
    if(order[pl1].includes(pl2)){
      return "Player 1 Won!"
    }else if(order[pl2].includes(pl1)){
      return "Player 2 Won!"
    }else{
      return 'Draw!'
    } 
  }