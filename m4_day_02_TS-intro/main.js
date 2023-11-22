"use strict";
function greet(name) {
    console.log('Hello, ' + name);
}
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function isEven(num) {
    return num % 2 === 0;
}
function findMax(arr) {
    return Math.max(...arr);
}
function joinString(strings, separator) {
    return strings.join(separator);
}
greet('Jimmy');
console.log(add(3, 3));
console.log(multiply(5, 3));
console.log('isEven? ' + isEven(6));
console.log(findMax([2, 4, 9, 54, 4, 6, 8, 42, 3, 33]));
console.log(joinString(['Hello', 'My', 'Great', 'World'], ' ^_^ '));
