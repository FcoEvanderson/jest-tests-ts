// Como passar parâmetros para os decoradores

function invertNameColor(param1: string, param2: string) {
  // CLosure
  return function <T extends new (...args: any[]) => any>(target: T) {
    console.log('Decorator here, I recieved: ', target)
    return class extends target {
      color: string
      name: string

      constructor(...args: any[]){
        super(...args)
        this.name = this.invert(args[0])
        this.color = this.invert(args[1])
      }

      invert(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2
      }
    }
  }
}

@invertNameColor('Value1', 'Value2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log("Class here")
  }
}

const animal = new Animal('Spyke','brown')
console.log(animal)
