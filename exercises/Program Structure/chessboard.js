// string -> 8 * 8 grid
// use \n
// each position either space or '#
// log this string

const size = 8;

let string = "";
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        string = (i + j) % 2 == 0 ? string + ' ' : string + '#';
    }
    string = string + '\n';

}
console.log(string)

/*
TextBook Solution
------------------------------------------------------------------
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";

}
console.log(board);
------------------------------------------------------------------
*/

