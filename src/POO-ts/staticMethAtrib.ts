export class People {
  static defaultAge = 0
  static defaultCpf = '000.000.000-00'

  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public cpf: string,
  ) {}

  normalMethod(): void {
    console.log(People.defaultAge, People.defaultCpf)
  }

  static createPeople(name: string, surname: string): People {
    return new People(name, surname, People.defaultAge, People.defaultCpf)
  }
}

const people1 = new People('Fco', 'Evan', 21, '123.456.789-10')
const people2 = People.createPeople('Dona', 'Meiry')
console.log(people1)
console.log(people2)
people1.normalMethod()
