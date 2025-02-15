/*
Custom build Math.min function:
    function(param1, param2) -> return the minimum of param1, param2
*/

function min(num1, num2) {
    return (
        (num1 <= num2) ? num1 : num2
    )
}

console.log(min(3,1));

/*
Textbook Solution
------------------------------------------------------
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
-----------------------------------------------------
*/