const readline = require('readline-sync');


console.log('Welcome to the Calculator!');
console.log('===========================\n');

console.log('Please enter the operator');
let operator = readline.prompt();

let numArr = [];
let opCount = 0;

while(true) {
    console.log('Please enter the operand');
    let userInput = +(readline.prompt());
    if (isNaN(userInput)) {
        console.log('Please enter only numbers.\n');
        continue;
    }
    numArr.push(userInput);
    opCount++;
    console.log('DO you want to add more operands? y/n')
    let response = readline.prompt();
    if(response === 'n') {
        break;
    } else if(response !== 'y') {
        console.log('Please enter only - y or n');
    }
}


console.log(numArr);

 function addition(arr) {
    let sum = 0;
    for(let i  = 0; i < opCount; i++) {
        sum += arr[i];       
    }
    return sum;
 }

 function subtraction(arr) {
    let sub = arr[0];
    for(let i = 1; i < opCount; i++) {
        sub -= arr[i];       
    }
    return sub;
 } 
 
 function multiplication(arr) {
    let mul = 1;
    for(let i  = 0; i < opCount; i++) {
        mul *= arr[i];       
    }
    return mul;
 }
 
 function division(arr) {
    let div = 1;
    for(let i  = 0; i < opCount; i++) {
        div /= arr[i];       
    }
    return div;
 }


switch(operator) {
    case '+': 
        console.log(addition(numArr));
        break;
    case '-': 
        console.log(subtraction(numArr));
        break;
    case '*': 
        console.log(multiplication(numArr));
        break;
    case '/': 
        console.log(division(numArr));
        break;
    default : 
        console.log('All done!');
        break;
}
