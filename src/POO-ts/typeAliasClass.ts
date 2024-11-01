type PeopleType = {
  name: string
  surname: string
  fullName(): string
}

type Age = {
  age: number
}

type isAdult = {
  isAdult: boolean
}

export class People implements PeopleType, Age, isAdult {

  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public isAdult: boolean
  ) {}

  fullName(): string {
    return this.name + ' ' + this.surname
  }
}

const pessoa1 = new People('Fco', 'Evan', 21, true)
console.log(pessoa1.fullName())
