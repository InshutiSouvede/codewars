function score( dice ) {
    let ones = dice.filter((el)=>el==1).length,
        twos = dice.filter((el)=>el==2).length,
        threes = dice.filter((el)=>el==3).length,
        fours = dice.filter((el)=>el==4).length,
        fives = dice.filter((el)=>el==5).length,
        sixs = dice.filter((el)=>el==6).length, score = 0
    
    score += (ones%3)*100+ Math.floor(ones/3)*1000
    
    score += Math.floor(twos/3)*200
    
    score += Math.floor(threes/3)*300
    
    score +=Math.floor(fours/3)*400
    
    score += (fives%3)*50+ Math.floor(fives/3)*500
    
    score +=Math.floor(sixs/3)*600
    
    return score
    
  }