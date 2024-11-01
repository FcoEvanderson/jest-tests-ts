export class People<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private counter = 0
  private elements: {[k: number]: T} = {}

  push(element: T): void {
    this.elements[this.counter] = element
    this.counter++
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined

    this.counter--
    const element = this.elements[this.counter]
    delete this.elements[this.counter]
    return element
  }

  isEmpty(): boolean {
    return this.counter === 0
  }

  size(): number {
    return this.counter
  }

  peek(): void {
    for (const key in this.elements) {
      console.log(this.elements[key])
    }
  }
}

const stack = new Stack<number>()
stack.push(1)
stack.push(2)
stack.push(3)
stack.peek()

while (!stack.isEmpty()) {
  console.log(stack.pop())
}
