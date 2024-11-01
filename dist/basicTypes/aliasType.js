"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCorPreferida = setCorPreferida;
const pessoa = {
    nome: 'Fco',
    idade: 27,
    salario: 15000
};
function setCorPreferida(pessoa, cor) {
    return { ...pessoa, corPreferida: cor };
}
console.log(setCorPreferida(pessoa, 'Vermelho'));
console.log(pessoa);
//# sourceMappingURL=aliasType.js.map