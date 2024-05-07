// assigning protoype to an already existing object using constructor
barkPtp = {
    bark(){
    console.log("the dog is barking")
    return 'Woof!'
  },
  }
  Object.assign(Dog.prototype,barkPtp)
  const dog = new Dog()
  dog.bark()