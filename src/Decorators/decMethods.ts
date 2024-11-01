function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor
): any {
  console.log(classPrototype, methodName, descriptor)

  return {
    // writable: false
    value: function (...args: string[]) {
      return args[0].toUpperCase()
    }
  }
}

export class APeople {
  name: string
  surname: string
  age: number

  constructor(name: string, surname: string, age: number){
    this.name = name
    this.surname = surname
    this.age = age
  }

  @decorator
  method(msg: string): string {
    return `${this.name} ${this.surname}: ${msg}`
  }

  get fullName(): string {
    return `${this.name} ${this.surname}`
  }

  set fullName(valor: string) {
    const words = valor.split(/\s+/g)
    const firstName = words.shift()
    if (!firstName) return
    this.name = firstName
    this.surname = words.join(' ')
  }
}

const people = new APeople('Fco', 'Evan', 21)
const method = people.method('Hello World!')
console.log(method)
