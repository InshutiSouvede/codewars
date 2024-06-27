function gimme (triplet) {
    const midEl = triplet.slice(0).sort((a,b)=>a-b)[1]
    return triplet.indexOf(midEl)
}