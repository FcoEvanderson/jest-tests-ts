"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
function semReturn(...args) {
    console.log(args.join(' '));
}
const pessoa = {
    nome: 'Fco',
    sobrenome: 'Evan',
    exibirNome() {
        console.log(this.nome + ' ' + this.sobrenome);
    }
};
exports.pessoa = pessoa;
semReturn('Fco', 'Evan');
pessoa.exibirNome();
//# sourceMappingURL=void.js.map