// Type Alias é basicamente criar um apelido para um tipo
// Por convenção, tipos criados começam com a primeira letra Maiúscula

type Idade = number
type Pessoa = {
  nome: string
  idade: Idade
  salario: number
  corPreferida?: string
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type CorPreferida = CorRGB | CorCMYK

const pessoa: Pessoa = {
  nome: 'Fco',
  idade: 27,
  salario: 15_000 // Algumas linguagens aceitam _ em números
}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return {...pessoa, corPreferida: cor}
}

console.log(setCorPreferida(pessoa, 'Vermelho'))
console.log(pessoa)
