enum Cores {
  VERMELHO,  // 0
  AZUL,      // 1
  AMARELO,    // 2

  // VERMELHO = 10,
  // AZUL = 100,
  // AMARELO = 200,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA = 202,
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor])
}

escolhaCor(Cores.ROXO)
