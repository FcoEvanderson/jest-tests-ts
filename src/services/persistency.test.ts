// describe('TESTANDO ALGUMA COISA', () => {
//   it('should return 1', () => {
//     const number = 1
//     expect(number).toBe(1)
//   })


//   describe('TESTANDO OUTRA COISA', () => {
//     test('should return Fco', () => {
//       const name = 'Fco'
//       expect(name).toBe('Fco')
//     })
//   })
// })

import { Persistency } from "./persistency";

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks())

  it('Should return undefined', () => {
    const sut = new Persistency()    // "sut"(system under test) é convenção de nome para testes
    expect(sut.saveOrder()).toBeUndefined()
  })

  it('Should call console.log once', () => {
    const sut = new Persistency()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('Should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.saveOrder()
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso!')
  })
})
