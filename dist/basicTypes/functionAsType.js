"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapStrings = mapStrings;
function mapStrings(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(item));
    }
    return newArray;
}
const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, item => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
//# sourceMappingURL=functionAsType.js.map