function decorator(classPrototype: any, methodName: string | symbol): any {
  let valorPropriedade: any
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join('')
        return
      }
      valorPropriedade = valor
    },
  }
}

export class APeople {
  @decorator
  name: string
  @decorator
  surname: string
  @decorator
  age: number

  constructor(
    name: string,
    surname: string,
    age: number
  ){
    this.name = name
    this.surname = surname
    this.age = age
  }

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

const people = new APeople('Francisco', 'Evanderson', 21)
const method = people.method('Hello')
console.log(method)
