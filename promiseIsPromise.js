function promiseHelloWorld() {
    return Promise? new Promise((resolve)=>resolve("Hello World!")) : (() => 'Hello Worldoo!')();
  }