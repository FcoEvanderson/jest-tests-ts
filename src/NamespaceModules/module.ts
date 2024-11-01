// Cria um escopo, um "mundinho" próprio onde pode-se criar tudo que quiser
// porém não poderá ser usado fora do namespace sem o 'export'

namespace MyNameSpace {
  export const nameNameSpace = 'Fco'

  export class PeopleNameSpace {
    constructor(public name: string){}
  }

  const pessoaNameSpace = new PeopleNameSpace('Fco')
  console.log(pessoaNameSpace)

  export namespace OtherNameSpace {
    export const otherNameNameSpace = 'Evan'
  }
}

const pessoaNameSpace = new MyNameSpace.PeopleNameSpace('Fco')
console.log(pessoaNameSpace)
console.log(MyNameSpace.nameNameSpace)
console.log(MyNameSpace.OtherNameSpace.otherNameNameSpace)
