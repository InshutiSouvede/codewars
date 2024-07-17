export function tailSwap(arr: [string,string]): [string,string] {
    const [h1,t1]= arr[0].split(':')
    const [h2,t2]= arr[1].split(':')
    return [`${h1}:${t2}`,`${h2}:${t1}`];
}