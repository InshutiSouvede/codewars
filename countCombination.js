function numCombo(arr, num) {
    let counter = 0
    for (j = 0; j < arr.length; j++) {
        let sum = 0
        for (i = 0; i < arr.length; i++) {
            if (i == j) {
                continue
            }
            sum += arr[i]
        }
        if (sum == num) {
            counter++
        }
    }

    return counter;
}