import { Messaging } from "./message"
import { Persistency } from "./persistency"

const createSut = () => {
  return new Messaging()
}

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()) // Importante para evitar erros nos testes!

  it('Should return undefined', () => {
    const sut = createSut()    // "sut"(system under test) é convenção de nome para testes
    expect(sut.sendMessage('teste')).toBeUndefined()
  })

  it('Should call console.log once', () => {
    const sut = createSut()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.sendMessage('teste')
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('Should call console.log with "Mensagem:" and "msg"', () => {
    const sut = createSut()
    const consoleSpy = jest.spyOn(console, 'log')
    sut.sendMessage('teste')
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem:', 'teste')
  })
})
