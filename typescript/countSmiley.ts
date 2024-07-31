export function countSmileys(arr: string[]): number {
    const noses = ['-','~'],eyes = [':',';'],mouth=['D','\)'];
    const smiley = arr.filter((el)=>{
      return (el.startsWith(':')||el.startsWith(';'))
      && (el.endsWith('D')||el.endsWith('\)'))    
      && (el.length==2||(el.length==3&&noses.includes(el[1])) )
    });
    return smiley.length
  }