function mostLikely(prob1,prob2){
    const [p1a,p1b] = prob1.split(':'),[p2a,p2b] = prob2.split(':')
    return p1a/p1b >p2a/p2b
}