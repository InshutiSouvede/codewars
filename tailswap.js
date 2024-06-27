function tailSwap(arr) {
    const arrAll = arr.map((el)=>el.split(':')).flat()
    arr[0] = arr[0].split(':')[0]+":"+arrAll[3]
    arr[1] = arr[1].split(':')[0]+":"+arrAll[1]
    return arr;
  }