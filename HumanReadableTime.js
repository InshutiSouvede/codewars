function humanReadable (seconds) {
    let h='',min=''
    if(seconds>=3600){
      h = Math.floor(seconds/3600)+''
      seconds = seconds%3600    
    }
    if(seconds>=60){
      min = Math.floor(seconds/60)+''
      seconds = (seconds%60) +''
    }
    return `${!h?'00':h.length===1?'0'+h:h}:${!min?'00':min.length===1?'0'+min:min}:${!seconds?'00':seconds.length==1?'0'+seconds:seconds}`;
  }