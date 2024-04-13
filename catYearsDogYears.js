var ownedCatAndDog = function (catYears, dogYears) {
    let arr = []
    arr[0] = catYears < 15 ? 0
        : catYears < 24 ? 1
            : catYears == 24 ? 2
                : 2 + Math.floor((catYears - 24) / 4)

    arr[1] = dogYears < 15 ? 0
        : dogYears < 24 ? 1
            : dogYears == 24 ? 2
                : 2 + Math.floor((dogYears - 24) / 5)
    return arr;
}