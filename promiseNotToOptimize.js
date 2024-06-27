function antiOptimizeAsync(task) {
    return new Promise(resolve => {
         const start = new Date();
         task = task();
         const execTime = new Date() - start;
          setTimeout(resolve, 11000 - execTime, task);
    });
  }
/*
function antiOptimizeAsync(task) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(1)
    },11000,'couldn\'t')
  })
}
*/