function toWeirdCase(string) {
    let strArr = string.split(' '), cased = []
    strArr.forEach((el, i) => {
        cased[i] = el.split('').map((sel, j) => {
            if (j % 2 == 0) {
                return sel.toUpperCase()
            }
            else {
                return sel.toLowerCase()
            }

        }).join('')

    })
    return cased.join(' ')
}