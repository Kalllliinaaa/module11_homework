let startValue = 5;
let endValue = 15;
let currentValue = startValue;

function sort() {
    if (currentValue <= endValue) {
        console.log(currentValue);
        currentValue++;
    } else {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(sort, 1000);
