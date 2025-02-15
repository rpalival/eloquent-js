/*
    Zero -> even
    One -> odd
    any other number N -> its evenness = N - 2

    write a recursive function - single param -> +ve, whole number
        return boolean

    Test on 50 and 75 and -1, can you fix this?
*/

function isEven(num) {
    let positive_num = Math.abs(num);
    if (positive_num === 0) {
        return true;
    } else if (positive_num === 1) {
        return false
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


