export function smaller(nums: number[]): number[] {
    let res:number[] = []
    nums.forEach((el,i,arr)=>{
      let c:number = 0
      for(let j:number =i+1;j<arr.length;j++){
        if(arr[j]<el) c++
      }
      res.push(c)
    })
    return res
  }