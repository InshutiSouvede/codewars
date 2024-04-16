function reverseMiddle(arr) {
    let tor = arr.length%2==0? (arr.length/2)-1:( (arr.length-1)/2)-1
      return arr.slice(tor,arr.length-tor).reverse();
  }