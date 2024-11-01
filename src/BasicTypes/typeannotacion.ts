/* eslint-disable */

// Tipos básicos (aqui ocorre interferência de tipos)
let nome: string = 'Evan' // qualquer tipo de strings: '' "" ``
let idade: number = 0o7744 // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true // true or false
let simbolo: symbol = Symbol('qualquer-symbol') // symbol
// let big: bigint = 10n // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayOfNumbers: number[] = [1, 2, 3]

let arrayDeStrings: Array<string> = ['a', 'b', 'c']
let arrayOfStrings: string[] = ['a', 'b', 'c']

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 21,
  nome: 'Evan'
}

// Funções
function soma(x: number, y: number): number {
  return x + y
}
const soma2: (x: number, y: number) => number = (x, y) => x + y
