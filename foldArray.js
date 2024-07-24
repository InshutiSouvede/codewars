function foldArray(array, runs)
{
  
  let counter = 0
  while(counter<runs){
    const stopIndex = Math.ceil(array.length/2)
    const part1 = array.slice(0,stopIndex)
    const part2 = array.slice(stopIndex).reverse()
    
    array = part1.map((el,i)=>{
      if(!part2[i]) return el
      return el+part2[i]
    })
    counter++
  }
  return array;
}