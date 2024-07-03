function smaller(nums) {
    const res = []
    nums.forEach((el,i,arr)=>{
      let c = 0;
      for(j=i+1;j<arr.length;j++){
        if(arr[j]<el){
          c++
        }
      }
      res.push(c)
    })
      return res
    }