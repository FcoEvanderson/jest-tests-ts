export interface OrderCostumer {
  getName(): string
  getIDN(): string    // IDenfication Number
}

export interface IndividualCustomerProtocol {
  firstName: string
  lastName: string
  cpf: string
}

export interface EnterpriseCustomerProtocol {
  name: string
  cnpj: string
}
