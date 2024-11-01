// Usando o This como um tipo

export class Calculator {
  constructor(public number: number) {}

  addition(n: number): this {
    this.number += n
    return this
  }

  subtraction(n: number): this {
    this.number -= n
    return this
  }

  multiplation(n: number): this {
    this.number *= n
    return this
  }

  division(n: number): this {
    this.number /= n
    return this
  }
}

export class SubCalculator extends Calculator {
  power(n: number): this {
    this.number **= n
    return this
  }
}

const calculator = new SubCalculator(5)
calculator.addition(10).multiplation(2).division(5).subtraction(1).power(2)
console.log(calculator)

// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null
  private url: string | null = null

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }

  setUrl(url: string): this {
    this.url = url
    return this
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}...`)
  }
}

const request = new RequestBuilder() // Builder
request.setUrl('http://www.google.com').setMethod('get').send()
