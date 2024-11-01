interface People {
  name: string
}

interface People {
  readonly surname: string
}

interface People {
  readonly address: string[]
}

interface People {
  age?: number
}

const people: People = {
  name: 'Fco',
  surname: 'Evan',
  address: ['Av. Pinheiro Machado'],
  age: 21,
}

people.address.push('Beija Flor')
console.log(people)


export {People}
