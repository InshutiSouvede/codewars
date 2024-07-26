export const perimeter = (n:number):number => {
    let ans = 1,counter = 1,toAdd = 1,prevToAdd = 0
    while(counter<=n){
      const tmp = toAdd
      toAdd = toAdd+prevToAdd
      prevToAdd =tmp
      
      ans +=toAdd
      
      counter++
    }
    return ans*4
}