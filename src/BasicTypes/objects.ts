const objectA: {
  readonly keyA: string,  //Não pode mais alterar o valor de keyA
  keyB: string,
  keyC?: string,
  [key: string]: unknown
} = {
  keyA: 'Value A',
  keyB: 'Value B',
}

// objectA.keyA = 'Outro valor'
objectA.keyC = 'Nova Chave'
objectA.keyD = 'Nova chave 2'
