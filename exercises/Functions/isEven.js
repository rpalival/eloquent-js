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

/*
Textbook Solution
------------------------------------------------------
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}
-----------------------------------------------------
*/
