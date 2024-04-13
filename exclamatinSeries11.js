function replace(s) {
    const regx = /[aeiou]/gi
    return s.replaceAll(regx, "!")
}