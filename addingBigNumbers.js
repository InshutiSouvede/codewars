function add(a, b) {
    let res = [], carry = 0, alen = a.length, blen = b.length;
    if (alen < blen) { a = a.padStart(blen, '0') }
    else if (blen < alen) { b = b.padStart(alen, '0') }
    for (i = a.length - 1; i >= 0; i--) {
        let sum = +a[i] + +b[i] + carry
        carry = Math.floor(sum / 10)
        res.unshift(sum % 10)
    }
    if (carry) res.unshift(carry)
    return res.join('')
}