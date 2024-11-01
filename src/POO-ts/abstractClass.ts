export abstract class Character {
  protected abstract emoji: string

  constructor(
    protected name: string,
    protected damage: number,
    protected hp: number,
  ) {}

  attack(character: Character): void {
    this.bordao()
    console.log(`${this.name} attacked!`)
    character.loseHP(this.damage)
  }

  loseHP(attackDamage: number): void {
    this.hp -= attackDamage
    console.log(`${this.emoji} ${this.name} have (${this.hp}/1000)hp right now!`)
  }

  abstract bordao(): void
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}'

  bordao(): void {
    console.log(this.emoji, 'FAST SLASH!')
  }
}

export class Monster extends Character {
  protected emoji = '\u{1F9DF}'

  bordao(): void {
    console.log(this.emoji, 'FANG ATTACK!')
  }
}

const warrior1 = new Warrior('Warrior 1', 100, 1000)
const monster1 = new Monster('Monster 1', 80, 1000)

warrior1.attack(monster1)
warrior1.attack(monster1)
warrior1.attack(monster1)

monster1.attack(warrior1)
monster1.attack(warrior1)
monster1.attack(warrior1)
