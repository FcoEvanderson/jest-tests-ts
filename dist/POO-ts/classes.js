"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
class Empresa {
    constructor(nome, cnpj) {
        this.colaboradores = [];
        this.nome = nome;
        this.cnpj = cnpj;
    }
    addColaborador(colaborador) {
        this.colaboradores.push(colaborador);
    }
    showColaboradores() {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}
exports.Empresa = Empresa;
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Fco', 'Evan');
const colaborador2 = new Colaborador('Dona', 'Meiry');
const colaborador3 = new Colaborador('Seu', 'Serejo');
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);
console.log(empresa1);
empresa1.showColaboradores();
//# sourceMappingURL=classes.js.map