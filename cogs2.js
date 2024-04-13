function cogRpm(cogs, n) {
    //   first means on the end, first
    let first = cogs[n] / cogs[0] * Math.pow(-1, n)
    //   last end
    let last = cogs[n] / cogs[cogs.length - 1] * Math.pow(-1, cogs.length - n - 1)
    return [first, last]
}