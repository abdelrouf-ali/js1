

var operator = prompt('Enter ( + or - or * or / ): ');

var number1 = prompt('Enter first number: ');
var number2 = prompt('Enter second number: ');

var result;


if (operator == '+') {

    result = number1 + number2;
}

else if (operator == '-') {
    result = number1 - number2;
}

else if (operator == '*') {
    result = number1 * number2;
}

else {
    result = number1 / number2;
}



alert(number1 + operator + number2 + " = " + result );