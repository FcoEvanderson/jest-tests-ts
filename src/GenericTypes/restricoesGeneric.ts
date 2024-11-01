type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K]

const getKey: GetKeyFn = (object, key) => object[key]

const animal = {
  color: 'Pink',
  vacines: ['Vacine 1', 'Vacine 2'],
  age: 5,
}

const vacines = getKey(animal, 'vacines')
const color = getKey(animal, 'color')

console.log(vacines, color, getKey(animal, 'age'))
