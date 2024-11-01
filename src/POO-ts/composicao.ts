export class Car {
  private readonly engine = new Engine()

  turnOn(): void {
    this.engine.turnOn()
  }

  accelerate(): void {
    this.engine.accelerate()
  }

  stop(): void {
    this.engine.stop()
  }

  turnOff(): void {
    this.engine.turnOff()
  }
}

export class Engine{
  turnOn(): void {
    console.log('Engine is on...')
  }

  accelerate(): void {
    console.log('Engine is accelerating...')
  }

  stop(): void {
    console.log('Engine is stopped...')
  }

  turnOff(): void {
    console.log('Engine is off...')
  }
}

const car1 = new Car()

car1.turnOn()
car1.accelerate()
car1.stop()
car1.turnOff()
