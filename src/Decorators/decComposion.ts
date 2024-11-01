// Composição de decoradores

type Constructor =
  new (...args: any[]) => any


function invertNameColor(param1: string, param2: string) {
  // CLosure
  return function (target: Constructor) {
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

function otherDecorator(param1: string) {
  return function (target: Constructor){
    console.log('Sou o outro decorador. ' + param1)
    return target
  }
}

@otherDecorator('O parametro do outro decorador.') // 2
@invertNameColor('Value1', 'Value2') // 1
export class Animal {
  constructor(public name: string, public color: string) {
    console.log("Class here")
  }
}

const animal = new Animal('Spyke','brown')
console.log(animal)
