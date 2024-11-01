function decorator(
  classPrototype: any,
  methodName: string | symbol,
  index: number
): any {
  console.log(classPrototype, methodName, index)

  return 'Qualquer coisa'
}

export class APeople {
  name: string
  surname: string
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

  method(@decorator msg: string): string {
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
const method = people.method('Hello')
console.log(method)
