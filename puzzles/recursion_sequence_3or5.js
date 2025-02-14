// function -> given a number, tries to find a sequence of addition and multiplication it took for that number
// either addition of 5 or multiplication of 3
// start from number 1 and repeatedly add the above logic

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        }
        else {
            return (
                find(current + 5, `(${history} + 5)`) ?? 
                find(current * 3, `(${history} * 3)`)
            );
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));