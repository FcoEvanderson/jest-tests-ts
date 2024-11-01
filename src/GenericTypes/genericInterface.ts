// Interfaces e Type Alias genéricos

interface PeopleProtocol<T = string, U = number> {
  name: T,
  surname: T,
  age: U,
}

type PeopleProtocol2<T = string, U = number> = {
  name: T,
  surname: T,
  age: U,
}

const student1: PeopleProtocol<string, number> = {
  name: 'Fco',
  surname: 'Evan',
  age: 21,
}

const student2: PeopleProtocol<number, number> = {
  name: 123,
  surname: 456,
  age: 21,
}

const student3: PeopleProtocol = {
  name: 'Fco',
  surname: 'Evan',
  age: 21,
}

const student4: PeopleProtocol2 = {
  name: 'Fco',
  surname: 'Evan',
  age: 21,
}

console.log(student1, student2, student3, student4)
