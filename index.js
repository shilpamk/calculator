const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('===========================\n');

console.log('Please enter the operator');
let operator = readline.prompt();

let numArr = [];
let opCount = 0;

while(true) {
    console.log('Please enter the operand');
    numArr.push(+(readline.prompt()));
    opCount++;
    console.log('DO you want to add more operands? y/n')
    let response = readline.prompt();
    if(response === 'n') {
        break;
    }
}




for(let i = 0; i < opCount; i++) {
    console.log(`Enter the operand ${i+1}: `);
    
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
    let sub = 0;
    for(let i  = 0; i < opCount; i++) {
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
// console.log('Enter the first number: ');
// let firstNum = +(readline.prompt());
// console.log('Enter the second number');
// let secondNum = +(readline.prompt());
// console.log(firstNum + secondNum);

// switch(operator) {
//     case '+':
//         console.log(`Addition: ${firstNum +secondNum}`);
//         break;
//     case '-':
//         console.log(`Subtraction: ${firstNum - secondNum}`);
//         break;
//     default:
//         console.log('No result');
//         break;
// }