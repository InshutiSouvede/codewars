const lengthOfSequence = function (arr, n) {
    if (!arr.includes(n) || arr.slice(arr.indexOf(n) + 1, arr.lastIndexOf(n)).includes(n) || arr.indexOf(n) == arr.lastIndexOf(n)) {
        return 0
    }
    return arr.lastIndexOf(n) - arr.indexOf(n) + 1
};