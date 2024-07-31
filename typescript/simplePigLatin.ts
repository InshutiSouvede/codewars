export const pigIt = (a : string) : string =>  {
    const stringArr = a.split(' ')
    const piggedString = stringArr.map((el)=>{
      if(!el || el=='.'||el=='!' || el=='?'){
        return el
      }
      return el.slice(1)+el[0]+'ay'
    }).join(' ')
    return piggedString
  }