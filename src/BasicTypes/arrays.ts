// Array<T> || T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1)
}

export function concatStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor)
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase())
}

const result = multiplicaArgs(1, 2, 3)
const concation = concatStrings('a', 'b', 'c')
const upperCase = toUpperCase('a', 'b', 'c')

console.log(result, concation, upperCase)
