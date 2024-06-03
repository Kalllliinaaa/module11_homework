let input = prompt("Type a number", "");
let aNumber = +input;

function getCountNum(aNumber) {
  if (typeof aNumber === 'number' && !isNaN(aNumber)) {
    if (aNumber % 2 === 0) {
      console.log('четное');
    } else {
      console.log('нечетное');
    }
  } else {
    console.log('Упс, кажется, вы ошиблись');
  }
}

getCountNum(aNumber);