/*
function countBs(string) -> number; number -> no of uppercase B characters
function countChar(string, 'character') -> no of specified characters
re-write countBs such that it uses countChar
*/

// function countBs(string) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == 'B') {
//             count += 1;
//         }
//     }
//     return count;
// }

// console.log(countBs("bAAaaBBbb"));

function countChar(string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == character) {
            count += 1;
        }
    }
    return count;
}

function countBs(string) {
    return countChar(string, 'B');
}

console.log(countBs("BAAaaBBbb"));

/*
Textbook Solution
------------------------------------------------------
Same as mine, variable names are changed
-----------------------------------------------------
*/