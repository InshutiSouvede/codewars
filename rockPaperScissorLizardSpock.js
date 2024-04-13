function rpsls(pl1,pl2){
    pl1 = pl1.toLowerCase(), pl2 = pl2.toLowerCase()
    let order = {
      scissors:["paper","lizard"],
      paper:["rock","spock"],
      rock:["lizard","scissors"],
      lizard:["spock","paper"],
      spock:["scissors","rock"]
    }
    return order[pl1].includes(pl2)? "Player 1 Won!"
    :order[pl2].includes(pl1)?"Player 2 Won!"
    :'Draw!'
    
  }