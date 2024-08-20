function divideStrings(a, b) {

    if (b === "0") throw new Error("Division by zero is not allowed.");
   

    let quotient = "";
    let remainder = "";

    let current = "";

    for (let i = 0; i < a.length; i++) {
        current += a[i];
        current = current.replace(/^0+/, '');

        let count = 0;
        while (isGreaterOrEqual(current, b)) {
            current = subtractStrings(current, b);
            count++;
        }

        quotient += count.toString();
    }

    remainder = current || "0";
    // Remove leading zeros from the result
    quotient = quotient.replace(/^0+/, '') || "0";

    return [quotient, remainder];
}
function isGreaterOrEqual(num1, num2) {
    if (num1.length > num2.length) return true;
    if (num1.length < num2.length) return false;
    return num1 >= num2;
}
function subtractStrings(num1, num2) {
    let result = "";
    let borrow = 0;
    num2 = num2.padStart(num1.length, "0");

    for (let i = num1.length - 1; i >= 0; i--) {
        let digit1 = +num1[i] - borrow;
        let digit2 = +num2[i];
        if (digit1 < digit2) {
            digit1 += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
        result = (digit1 - digit2) + result;
    }

    // Remove leading zeros from the result
    return result.replace(/^0+/, '') || "0";
}