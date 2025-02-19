/*
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
*/

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--){
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;

}

// console.log(arrayToList([1,2,3]))

function listToArray(list) {
    let resultArray = [];
    for (let node = list; node; node = node.rest) {
        resultArray.push(node.value);
    }
    return resultArray;
}

function prepend(num, list) {
    return {
        value: num,
        rest: list
    }
}

function nth(list, index) {
    if (list === null) {
        return undefined;
    }
    if (index === 0) {
        return list.value;
    }
    return nth(list.rest, index - 1);
    
}

console.log(prepend(0,arrayToList([1,2,3])));

console.log(listToArray(arrayToList([1,2,3])));