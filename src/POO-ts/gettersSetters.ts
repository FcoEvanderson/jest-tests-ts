export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '')
  }

  set cpf(valor: string) {
    this._cpf = valor
  }
}

const pessoa = new Pessoa('Fco', 'Evan', 21, '123.456.789-10')
console.log(pessoa.cpf)
