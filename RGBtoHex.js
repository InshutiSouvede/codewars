function rgb(r, g, b) {
    r = r<0?"00":r>255?"FF":r.toString(16).padStart(2,0).toUpperCase()
    g = g<0?"00":g>255?"FF":g.toString(16).padStart(2,0).toUpperCase()
    b = b<0?"00":b>255?"FF":b.toString(16).padStart(2,0).toUpperCase()
    return `${r}${g}${b}`
}