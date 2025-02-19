/*
func -> reverseArray(array) -> produce a new array in reverse order of elements
func -> reverseArrayInPlace(array) -> 
*/

function reverseArray(nums) {
    let revArray = []
    for (let i = nums.length - 1; i >= 0; i-- ) {
        revArray.push(nums[i]);
    }
    return revArray;
}

// console.log(reverseArray([1,2,3,4,5]));

function reverseArrayInPlace(nums) {
    let lp = 0;
    let rp = nums.length - 1;

    while (lp < rp) {
        let tmp = nums[lp];
        nums[lp] = nums[rp];
        nums[rp] = tmp;

        lp++;
        rp--;
    }
    return nums;
}

console.log(reverseArrayInPlace([1,2,3,4,5]));