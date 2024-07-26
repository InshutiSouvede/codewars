export function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] {
	if(!iterable.length) return []
  const res = [iterable[0]]
  let prevChar:string|number = iterable[0]
  for(const el  of iterable){
    if(el===prevChar){ continue}
    
    res.push(el)
    prevChar = el
  }
  return res
};