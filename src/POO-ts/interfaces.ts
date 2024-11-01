// Interfaces
interface FullNameType {
  name: string
  surname: string
  fullName(): string
}

interface Age {
  age: number
}

interface isAdult {
  isAdult: boolean
}

// type PeopleType = FullNameType & Age & isAdult

interface PeopleType2 extends FullNameType, Age, isAdult {}


// Outra opção válida

// type FullNameType = {
//   name: string
//   surname: string
//   fullName(): string
// }

// type Age = {
//   age: number
// }

// type isAdult = {
//   isAdult: boolean
// }

// type PeopleType = FullNameType & Age & isAdult

export class People implements PeopleType2 {

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

const peopleObj: PeopleType2 = {
  name: 'Dona',
  surname: 'Meiry',
  age: 21,
  isAdult: true,

  fullName() {
    return this.name + ' ' + this.surname
  },
}

const pessoa1 = new People('Fco', 'Evan', 21, true)
console.log(pessoa1.fullName())
console.log(peopleObj.fullName())
