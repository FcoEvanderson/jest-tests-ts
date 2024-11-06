import { Product } from "./product"

const createSut = (name: string, price: number): Product => {
  return new Product(name, price)
}

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()) // Importante para evitar erros nos testes!

  it('Should have properties name and price', () => {
    const sut = createSut('Balde', 19.90)
    expect(sut).toHaveProperty('name', 'Balde')
    expect(sut.price).toBeCloseTo(19.90)
  })
})
