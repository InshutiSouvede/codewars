function equableTriangle(a, b, c) {
    const P = a + b + c, s = P / 2, A = (s * (s - a) * (s - b) * (s - c)) ** (1 / 2)
    return P === A
}