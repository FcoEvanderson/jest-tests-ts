"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicaArgs = multiplicaArgs;
exports.concatStrings = concatStrings;
exports.toUpperCase = toUpperCase;
function multiplicaArgs(...args) {
    return args.reduce((ac, valor) => ac * valor, 1);
}
function concatStrings(...args) {
    return args.reduce((ac, valor) => ac + valor);
}
function toUpperCase(...args) {
    return args.map((value) => value.toUpperCase());
}
const result = multiplicaArgs(1, 2, 3);
const concation = concatStrings('a', 'b', 'c');
const upperCase = toUpperCase('a', 'b', 'c');
console.log(result, concation, upperCase);
//# sourceMappingURL=arrays.js.map