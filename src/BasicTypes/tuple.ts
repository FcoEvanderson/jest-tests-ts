const dadosCliente1: readonly [number, string] = [1, 'Fco']
const dadosCliente2: [number, string, string] = [1, 'Fco', 'Evan']
const dadosCliente3: [number, string, string?] = [1, 'Fco']
const dadosCliente4: [number, string, ...string[]] = [1, 'Fco', 'Evan']

// dadosCliente1[0] = 100
// dadosCliente1[1] = 'Alexandra'
// dadosCliente1.pop()

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)


const array1: readonly string[] = ['Luiz', 'Andrew']
const array2: ReadonlyArray<string> = ['Luiz', 'Andrew']

console.log(array1)
console.log(array2)
