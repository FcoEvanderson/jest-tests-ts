// Tipo do construtor da classe
type Constructor = new (...args: any[]) => any

// Classes
function decoratorClass(constructor: Constructor): any {
  // Chamado na criação da classe
  console.log('CLASSE')
  console.log(constructor)
  console.log('###')
}

// Método de Instância (normal)
function MethodDecorator(
  classPrototype: any,
  methodName: string,
  descritorPropriedades: PropertyDescriptor
): any {
  // Chamado na criação do método (não preica chamar o método)
  console.log('MÉTODO NORMAL')
  console.log(classPrototype)
  console.log(methodName)
  console.log(descritorPropriedades)
  console.log('###')
}

// Método Estático
function decoradorMetodoEstatico(
  classConstructor: Constructor,
  methodName: string,
  descritorPropriedade: PropertyDescriptor
): any {
  // Chamado na criação de método (não precisa chamar o método)
  console.log('MÉTODO Estático')
  console.log(classConstructor)
  console.log(methodName)
  console.log(descritorPropriedade)
  console.log('###')
}

// Parâmetro de método
function decoradorParametroMetodo(
  classPrototype: any,
  methodName: string,
  indexPropriedade: number,
): any {
  // Chamado na criação do Método
  console.log('PARÂMETRO DE MÉTODO')
  console.log(classPrototype)
  console.log(methodName)
  console.log(indexPropriedade)
  console.log('###')
}

// Parâmetro de método estático
function decoratorStaticMethodParam(
  classConstructor: Constructor,
  methodName: string,
  indexPropriedade: number,
): any {
  // Chamado na criação do Método
  console.log('PARÂMETRO DE MÉTODO ESTÁTICO')
  console.log(classConstructor)
  console.log(methodName)
  console.log(indexPropriedade)
  console.log('###')
}

// Propriedade
function decoratorPropriedade(
  classPrototype: any,
  methodName: string,
): any {
  // Chamado na criação da propriedade
  console.log('DECORATOR DE PROPRIEDADE')
  console.log(classPrototype)
  console.log(methodName)
  console.log('###')
}

// Propriedade Estática
function decoratorPropriedadeEstatico(
  classPrototype: any,
  methodName: string,
): any {
  // Chamado na criação do Método
  console.log('DECORATOR DE PROPRIEDADE ESTÁTICA')
  console.log(classPrototype)
  console.log(methodName)
  console.log('###')
}

// Getter/Setter
function decoradorGetterSetterNormal(
  classPrototype: any,
  methodName: string,
  descritorPropriedade: PropertyDescriptor,
): any {
  // Chamado na criação do Método
  // (Só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER normal')
  console.log(classPrototype)
  console.log(methodName)
  console.log(descritorPropriedade)
  console.log('###')
}

// Getter/Setter estático
function decoradorGetterSetterStatic(
  classConstructor: Constructor,
  methodName: string,
  descritorPropriedade: PropertyDescriptor,
): any {
  // Chamado na criação do Método
  // (Só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER estático')
  console.log(classConstructor)
  console.log(methodName)
  console.log(descritorPropriedade)
  console.log('###')
}

// A classe e o uso dos decorators

@decoratorClass
export class APeople {

  @decoratorPropriedade
  name: string
  surname: string
  age: number

  @decoratorPropriedadeEstatico
  static propriedadeEstatica = ''

  constructor(
    name: string,
    surname: string,
    age: number
  ){
    this.name = name
    this.surname = surname
    this.age = age
  }

  @MethodDecorator
  method(@decoradorParametroMetodo msg: string): string {
    return `${this.name} ${this.surname}: ${msg}`
  }

  @decoradorMetodoEstatico
  static metodoEstatico(
    @decoratorStaticMethodParam msg: string,
  ): string {
    return APeople.propriedadeEstatica + msg
  }

  @decoradorGetterSetterNormal
  get fullName(): string {
    return `${this.name} ${this.surname}`
  }

  set fullName(valor: string) {
    const words = valor.split(/\s+/g)
    const firstName = words.shift()
    if (!firstName) return
    this.name = firstName
    this.surname = words.join(' ')
  }

  @decoradorGetterSetterStatic
  static get staticPropertyGetterSetter(): string {
    return APeople.propriedadeEstatica
  }

  static set staticPropertyGetterSetter(value: string) {
    APeople.propriedadeEstatica = value
  }
}

const people = new APeople('Francisco', 'Evanderson', 21)
const method = people.method('Hello')
console.log(method)
