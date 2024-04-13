function matrix(array) {
    for(i=0;i<array.length;i++){
        array[i][i] = array[i][i]>=0?1:0
    }
  return array
}