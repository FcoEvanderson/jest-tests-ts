// Tipos Genéricos servem pra quando vc não tem certeza de qual é o tipo.

// Jeito Errado de construir uma função genérica

// type FilterCallback = (
//   value: unknown,
//   index?: number,
//   array?: unknown[],
// ) => boolean

// export function newFilter(array: unknown[], callbackfn: FilterCallback): unknown {
//   const newArray = []

//   for (let i = 0; i < array.length; i++) {
//     if (callbackfn(array[i])) {
//       newArray.push(array[i])
//     }
//   }

//   return newArray
// }

    // Jeito Certo de construir uma função genérica

type FilterCallback<T> = (value: T, index?: number, array?: T[]) => boolean

export function newFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray
}

const array = [1,2,3,4,5,6,7,8,9,10]

const originalFilteredArray = array.filter((value) => value < 5)
console.log(originalFilteredArray)

const filteredArray = newFilter(array, (value) => value < 5)
console.log(filteredArray)
