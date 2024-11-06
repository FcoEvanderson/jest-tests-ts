import { IndividualCustomer, EnterpriseCustomer } from "./customer"

const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf)
}

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj)
}

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks()) // Importante para evitar erros nos testes!

  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Fco', 'Evan', '000.000.000-00')
    expect(sut).toHaveProperty('firstName', 'Fco')
    expect(sut).toHaveProperty('lastName', 'Evan')
    expect(sut).toHaveProperty('cpf', '000.000.000-00')
  })

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Fco', 'Evan', '000.000.000-00')
    expect(sut.getName()).toBe('Fco Evan')
    expect(sut.getIDN()).toBe('000.000.000-00')
  })
})

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks()) // Importante para evitar erros nos testes!

  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Agespisa', '0000.0000/000')
    expect(sut.getName()).toBe('Agespisa')
    expect(sut.getIDN()).toBe('0000.0000/000')
  })
})
