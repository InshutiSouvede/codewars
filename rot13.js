function rot13(str) {
    const input = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz']
    const output = [...'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm']
    const res = str.split('').map((el)=>{
      const index = input.indexOf(el)
      return !el || index === -1?el:output[index]
    }).join('')
      return res
    }