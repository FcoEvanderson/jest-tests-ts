"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = createPerson;
exports.squareOf = squareOf;
let x;
if (typeof x === 'undefined')
    x = 20;
console.log(x * 2);
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
    };
}
function squareOf(x) {
    if (typeof x === 'number')
        return x * x;
    return null;
}
const squareOfTwoNumber = squareOf(2);
if (squareOfTwoNumber === null) {
    console.log('Conta Inválida');
}
else {
    console.log(squareOfTwoNumber * 100);
}
//# sourceMappingURL=nullundefined.js.map