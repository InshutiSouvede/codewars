function mostMoney(students) {
    let most = 0,std =[],best=''
    for(const stun of students){
      stun.sum  = 5*stun.fives+10*stun.tens+ 20 *stun.twenties
      if(stun.sum >most){most = stun.sum; best = stun.name}
    }
    std= students.filter((el)=>el.sum===most)
    return std.length==1? best:'all'  
  }