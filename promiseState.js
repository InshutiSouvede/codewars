async function getState(promise) {
    const t = {}
    return Promise.race([promise,t]).then((value)=>value==t?'pending':'fulfilled').catch(v=>'rejected')
}