/*
console.log -> print 1 to 100
if num % 3 -> "Fizz"
if num % 5 and not num % 3 -> "Buzz"
if num % 5 and num % 3 -> "FizzBuzz"
else -> num
*/

for (let num = 1; num <= 100; num += 1){
    if (num % 5 == 0 && num % 3 == 0) {
        console.log("FizzBuzz");
    } else if (num % 3 == 0) {
        console.log("Fizz");
    } else if (num % 5 == 0 && num % 3 != 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}