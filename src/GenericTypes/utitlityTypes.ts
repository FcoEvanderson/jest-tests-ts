// Record
const object1: Record<string, string | number> = {
  name: 'Fco',
  surname: 'Evan',
  age: 30,
}

// console.log(object1)

type PeopleProtocol = {
  name?: string,
  surname?: string,
  age?: number
}

// Required: tudo que era opcional, agora é obrigatório. É modificável.
type PeopleRequired = Required<PeopleProtocol>

// Partial: tudo que era obrigatório, agora é opcional. É modificável.
type PeoplePartial = Partial<PeopleRequired>

// Readonly: tudo é obrigatório e não pode ser modificado.
type PeopleReadonly = Readonly<PeopleRequired>

// Pick: Permite que você escolha oq quer de dentro do objeto
type PeoplePick = Pick<PeopleRequired, 'name'|'surname'>

const object2: PeopleRequired = {
  name: 'Fco',
  surname: 'Evan',
  age: 30,
}
// console.log(object2)


type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'

// Exclude: Computa todos os tipos que estão em ABC, que NÃO estão em CDE
type ExcludeType = Exclude<ABC, CDE>    // A, B

// Extract: Computa todos os tipos que estão em ABC, que podem ser atribuidos a CDE
type ExtractType = Extract<ABC, CDE>    // C


// Exemplo de uso

// type AccountMongo = {
//   _id: string
//   name: string
//   age: number
// }

// type AccountApi = {
//   id: string
//   name: string
//   age: number
// }

type AccountMongo = {
  _id: string
  name: string
  surname: string
  age: number
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string
}

const myAccountMongo: AccountMongo = {
  _id: 'asdcvgt6yhnju89olkio9uhbvdw23',
  name: 'Fco',
  surname: 'Evan',
  age: 21,
}

function mapAccount(accounMongo: AccountMongo): AccountApi {
  const {_id, ...accountData} = accounMongo
  return {...accountData, id: _id}
}

const accountApi = mapAccount(myAccountMongo)
console.log(accountApi)

// Module Mode
export default 1
