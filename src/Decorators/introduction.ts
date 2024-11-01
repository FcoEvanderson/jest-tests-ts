@decorator
export class Animal {
  constructor(public name: string, public color: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    color: string
    name: string

    constructor(...args: any[]){
      super(...args)
      this.name = this.invert(args[0])
      this.color = this.invert(args[1])
    }

    invert(valor: string): string {
      return valor.split('').reverse().join('')
    }
  }
}


const animal = new Animal('Spyke','brown')
console.log(animal)
