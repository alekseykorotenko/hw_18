let operation = confirm('Add?')
  ? '+'
  : confirm('sub?')
  ? '-'
  : confirm('mult?')
  ? '*'
  : confirm('div?')
  ? '/'
  : false;

let firstNum;

do {
  firstNum = +prompt('Enter first number');
} while (isNaN(firstNum));
let secondNum;
do {
  secondNum = +prompt('Enter second number');
} while (isNaN(secondNum));

let res;

switch (operation) {
  case '+':
    res = firstNum + secondNum;
    break;
  case '-':
    res = firstNum - secondNum;
    break;
  case '*':
    res = firstNum * secondNum;
    break;
  case '/':
    res = firstNum / secondNum;
    break;
  default:
    'wrong data';
    break;
}

// let res =
//   operation == '+'
//     ? firstNum + secondNum
//     : operation == '-'
//     ? firstNum - secondNum
//     : operation == '*'
//     ? firstNum * secondNum
//     : operation == '/'
//     ? firstNum / secondNum
//     : 'wrong data';

document.write(`${firstNum} ${operation} ${secondNum} = ${res}`);
