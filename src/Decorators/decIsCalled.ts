function invertNameColor<T extends new (...args: any[]) => any>(target: T) {
  console.log('Decorator here, I recieve: ', target)
  return class extends target {
    color: string
    name: string

    constructor(...args: any[]){      // Aqui que o construtor da Classe é chamada
      super(...args)
      this.name = this.invert(args[0])
      this.color = this.invert(args[1])
    }

    invert(valor: string): string {
      return valor.split('').reverse().join('')
    }
  }
}

@invertNameColor    // O decorador é chamado na hora da criação da classe
export class Animal {
  constructor(public name: string, public color: string) {
    console.log("Class here")
  }
}

const animal = new Animal('Spyke','brown')
console.log(animal)
