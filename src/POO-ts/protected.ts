// Versão mais longa de criar uma classe
export class Empresa {
  public readonly nome: string    // public aqui não é necessário
  protected readonly colaboradores: Colaborador[] = []
  private readonly cnpj: string

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11')
  }

  popColab(): Colaborador | null {
    const colaborador = this.colaboradores.pop()
    if (colaborador) return colaborador
    return null
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

const empresa1 = new Udemy()
const colaborador1 = new Colaborador('Fco', 'Evan')
const colaborador2 = new Colaborador('Dona', 'Meiry')
const colaborador3 = new Colaborador('Seu', 'Serejo')
empresa1.addColaborador(colaborador1)
empresa1.addColaborador(colaborador2)
empresa1.addColaborador(colaborador3)
console.log(empresa1)
const colaboradorRemovido = empresa1.popColab()
console.log(colaboradorRemovido)
empresa1.showColaboradores()
