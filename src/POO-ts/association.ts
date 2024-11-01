export class Writer {
  private _tool: Tool | null = null

  constructor(private _name: string) {}

  get name(): string {
    return this._name
  }

  set tool(tool: Tool | null){
    this._tool = tool
  }

  get tool(): Tool | null {
    return this._tool
  }

  write(): void {
    if (this.tool === null) {
      console.log('I cant write without any tool...')
      return
    }
    this.tool.write()
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void

  get name(): string {
    return this._name
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} is writing...`)
  }
}

export class Typewriter extends Tool {
  write(): void {
    console.log(`${this.name} is typing...`)
  }
}

const writer1 = new Writer('Evan')
const pen1 = new Pen('Bic')
const typewriter1 = new Typewriter('Vintage')

// console.log(writer1.name)
// console.log(pen1.name)
// console.log(typewriter1.name)

writer1.tool = pen1
writer1.write()

writer1.tool = typewriter1
writer1.write()
