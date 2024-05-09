String.prototype.hashify = function () {
    const obj = {}, arr = [...this]
    arr.forEach((el, i, ar) => {
        if (i != ar.length - 1) {
            obj.hasOwnProperty(el) ? obj[el] = [...obj[el], ar[i + 1]] : obj[el] = ar[i + 1]
        } else {
            obj.hasOwnProperty(el) ? obj[el] = [...obj[el], ar[0]] : obj[el] = ar[0]
        }
    })
    return obj
}