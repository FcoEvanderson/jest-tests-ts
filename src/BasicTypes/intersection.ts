//  É como o AND (&) para criar tipos com valores diferentes

type TemNome = { nome: string }
type TemSobrenome = {sobrenome: string}
type TemIdade = {idade: number}
type Pessoa = TemNome & TemSobrenome & TemIdade // <-- é obrigatório atribuir valor a todos os tipos
// type Pessoa = TemNome | TemSobrenome | TemIdade // <-- Não é recomendável, pois pode ser confuso

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'D' | 'A'
type Intersecao = AB & AC & AD // A interseção continua sendo o A

const pessoa: Pessoa = {
  idade: 21,
  nome: 'Fco',
  sobrenome: 'Evan',
}

console.log(pessoa)

//Modulo Mode
export {pessoa}
