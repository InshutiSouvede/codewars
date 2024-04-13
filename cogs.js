function cogRpm(cogs) {  
    return cogs[0]/cogs[cogs.length-1] * ( Math.pow(-1,(cogs.length-1)))
  }