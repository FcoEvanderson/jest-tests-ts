export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade
  }

  getCpf(): string {
    return this.cpf
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf)
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes')
    return super.getNomeCompleto()
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`
  }
}

const pessoa1 = new Pessoa('Fco', 'Evan', 21, '000.000.000-00')
const aluno1 = new Aluno('Fco', 'Evan', 21, '000.000.000-00', '001')
const cliente1 = new Cliente('Fco', 'Evan', 21, '000.000.000-00')

console.log(pessoa1.getNomeCompleto())
console.log(aluno1.getNomeCompleto())
console.log(cliente1.getNomeCompleto())
