// Versão mais longa de criar uma classe
export class Empresa {
  public readonly nome: string    // public aqui não é necessário
  private readonly colaboradores: Colaborador[] = []
  protected readonly cnpj: string

  constructor(nome: string, cnpj: string) {
    this.nome = nome
    this.cnpj = cnpj
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador)
  }

  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador)
    }
  }
}

// Versão mais curta de criar uma classe
export class Colaborador {
  constructor(
    public readonly nome: string,     // aqui o Public é necessário
    public readonly sobrenome: string,
  ) {

  }
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11')
const colaborador1 = new Colaborador('Fco', 'Evan')
const colaborador2 = new Colaborador('Dona', 'Meiry')
const colaborador3 = new Colaborador('Seu', 'Serejo')
empresa1.addColaborador(colaborador1)
empresa1.addColaborador(colaborador2)
empresa1.addColaborador(colaborador3)
console.log(empresa1)
empresa1.showColaboradores()
