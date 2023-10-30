let operation = confirm('Add?')
  ? '+'
  : confirm('sub?')
  ? '-'
  : confirm('mult?')
  ? '*'
  : confirm('div?')
  ? '/'
  : false;

let firstNum = +prompt('Enter first number');
let secondNum = +prompt('Enter second number');

let res =
  operation == '+'
    ? firstNum + secondNum
    : operation == '-'
    ? firstNum - secondNum
    : operation == '*'
    ? firstNum * secondNum
    : operation == '/'
    ? firstNum / secondNum
    : 'wrong data';

document.write(`${firstNum} ${operation} ${secondNum} = ${res}`);
