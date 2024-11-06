describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10

    expect(number).toBe(10)
    expect(number).toEqual(10)

    expect(number).not.toBeFalsy()
    expect(number).toBeTruthy()

    expect(number).toBeGreaterThan(9)
    expect(number).toBeGreaterThanOrEqual(10)
    expect(number).toBeLessThan(11)
    expect(number).toBeLessThanOrEqual(10)

    expect(number).toBeCloseTo(10.001, 1) // Checa por casas decimais
    expect(number).toBeCloseTo(9.996)

    expect(number).not.toBeNull()

    // expect(number).toHaveProperty('toString')  Aparentemente n tem mais esse método.

  })
})

describe('Primitive values', () => {
  it('should test jest assertions with objects', () => {
    const person1 = {name: 'Fco', age: 21}
    const person2 = {...person1}

    expect(person1).toEqual(person2)
    expect(person1).toHaveProperty('age')
    expect(person1).toHaveProperty('age', 21)
    expect(person1).not.toHaveProperty('lastName')

    expect(person1.name).toBe('Fco')
  })
})
