// Chaves de tipos ajuda a manter o código mais limpo e prevenir repetições

type Vehicle = {
  brand: string,
  year: number,
}

type Car = {
  brand: Vehicle['brand'],    // Agora sempre que os tipos das chaves mudarem,
  year: Vehicle['year'],      // aqui tbm irá mudar automaticamente.
  name: string,
}

const car: Car = {
  brand: 'Fiat',
  year: 2020,
  name: 'uno',
}

console.log(car)
