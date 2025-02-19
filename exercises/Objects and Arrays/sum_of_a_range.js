//  console.log(sum(range(1, 10)));
// mimic the functionality of both these methods

/**
 * Returns an array of numbers from start to end
 * 
 * @param {number} start - starting number of the range
 * @param {number} end - ending number of the range
 * @returns {number[]} - Array containing numbers from start to end
 * 
 * @example
 * range(1, 5) // returns [1, 2, 3, 4, 5]
 */
function myRange(start, end, step=1) {
    let array = [];
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

function mySum(array) {
    let sum = 0;
    for (num of array) {
        sum += num;
    }
    return sum;
}

console.log(myRange(15, 10, -2));
console.log(mySum(myRange(1, 10)));