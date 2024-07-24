export class Vector {
  
    constructor(public components: number[]) {};
    add(v:Vector):Vector{
      if(v.components.length!== this.components.length){
        throw new Error("Length of the two vectors should be equal")
      }
      const res = this.components.map((el,i)=>{
        return el+v.components[i]
      })
      return new Vector(res)
    }
    subtract(v:Vector):Vector{
      if(v.components.length!== this.components.length){
        throw new Error("Length of the two vectors should be equal")
      }
      const res = this.components.map((el,i)=>{
        return el-v.components[i]
      })
      return new Vector(res)
    }
    dot(v:Vector):number{
      if(v.components.length!== this.components.length){
        throw new Error("Length of the two vectors should be equal")
      }
      return this.components.reduce((acc,cv,i)=>{
        return acc+ (cv*v.components[i])
      },0)
    }
    norm():number{
      return Math.sqrt(this.components.reduce((acc,cv)=>{
        return acc+ (cv**2)
      },0))
    }
    toString():string{
      return `(${this.components.toString()})`
    }
    equals(v:Vector):boolean{
      return v.components.toString() === this.components.toString() 
    }
  };