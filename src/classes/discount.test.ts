import { Discount, FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from "./discount"

const createSut = (className: new () => Discount): Discount => {
  return new className()
}

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()) // Importante para evitar erros nos testes!

  it('should have no discount', () => {
    const sut = createSut(NoDiscount)
    expect(sut.calculate(10.99)).toBeCloseTo(10.99)
  })

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount)
    expect(sut.calculate(100.5)).toBeCloseTo(50.25)
  })

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount)
    expect(sut.calculate(100)).toBeCloseTo(90)
  })
})
