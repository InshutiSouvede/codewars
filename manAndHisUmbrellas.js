function minUmbrellas(weather) {
  let numUmb =0, atOffice = 0, atHome = 0
  if(!weather.includes("rainy")&&!weather.includes("thunderstorms")) return 0
//   i==odd,home; i even: office
  for (i=0;i<weather.length;i++){    
    if(weather[i]=="rainy"||weather[i]=="thunderstorms"){
//       if morning
      if(i%2==0){
//         check if there is no umbrella is at home
        if(atHome <1){
//           buy one and take it to the office
          numUmb++
          atOffice += 1
        }else{
// just take the one you have to the officees
          atOffice += 1
          atHome -= 1
        }      
      }
      else //if its evening and there was no umbrella in mornig?
//         if there isn't one at the office
        if(atOffice <1){
//           buy one and take it home
          numUmb++
          atHome += 1
        }
        else{
//           take the one there home
          atOffice -= 1
          atHome += 1
        }
    }
    
  }
  return numUmb
}