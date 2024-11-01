let x = 10  
x = 0b1010
const y = 10
let a = 100 as const // eslint-disable-line

const pessoa = {
  nome: 'Fco' as const,
  sobrenome: 'Evan',
}

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') { // "cor" não é VALOR, e sim TIPO
  return cor
}

pessoa.nome = 'Fco'
console.log(escolhaCor("Vermelho"))

// Module mode
export default 1
