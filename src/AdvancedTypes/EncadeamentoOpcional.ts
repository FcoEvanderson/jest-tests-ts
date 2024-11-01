// Encadeamento Opcional ou Operador de Coalescência nula
// Evita que vc tenha vários IFs no seu código

type Documento = {
  title: string
  text: string
  date?: Date
}

const documento: Documento = {
  title: 'O titulo',
  text: 'O texto',
  // date: new Date()
}

console.log(documento.date?.toDateString() ?? 'Opa, não existe data.')
// console.log(undefined ?? 'Opa, não existe data.')

// Encadeamento Opcional (?): evita que o programa quebre senão tiver o valor
// Coalescência nula(?? ''): Chequa se o valor no lado esquerdo é um não-valor(null, undefined)
