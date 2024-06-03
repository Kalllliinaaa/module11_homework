let input = prompt('Введите число:');
let aNumber = Number(input);


function getNum(num) {
    if (num > 1000) {
        console.log('Данные неверны');
        return;
    }

    if (num <= 1) {
        console.log('Число должно быть больше 1');
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log('Число не является простым');
            return;
        }
    }

    console.log('Число является простым');
}



getNum(aNumber);