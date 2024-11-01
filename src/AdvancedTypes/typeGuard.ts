function add(a: unknown, b: unknown) {
  return typeof a === 'number' && typeof b === 'number'
  ? a + b : `${a}${b}`
}

console.log(add(2 , 3))
console.log(add(2 , '3'))

type People = {type: 'people', name: string}
type Animal = {type: 'animal', color: string}
type PeopleOrAnimal = People | Animal

export class Student implements People {
  type: "people" = 'people'
  constructor(public name: string) {}
}

function showName(obj: PeopleOrAnimal): void {
  // if ('name' in obj) console.log(obj.name)
  // if (obj instanceof Student) console.log(obj.name)
  switch (obj.type) {
    case 'people':
      console.log(obj.name)
      return
    case 'animal':
      console.log(`Its a ${obj.color} animal.`)
      return
  }
}

showName(new Student('Fco'))
showName({type: 'animal', color: 'orange'})
