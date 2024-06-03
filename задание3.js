function createAdder(firstNumber) {
    return function(nextNumber) {
        return firstNumber + nextNumber;
    }
}

const addFunc = createAdder(9);
const res = addFunc(11);

console.log(res); 