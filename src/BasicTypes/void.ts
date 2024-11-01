function semReturn(...args: string[]): void {
  console.log(args.join(' '))
}

const pessoa = {
  nome: 'Fco',
  sobrenome: 'Evan',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  }
}

semReturn('Fco', 'Evan')
pessoa.exibirNome()

export { pessoa }
