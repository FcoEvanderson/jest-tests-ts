// ele é como se fosse o OR (||), para criar tipos com valores que podem ser diferentes

function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b
  return `${a}${b}`
}

console.log(addOrConcat(10, 20))
console.log(addOrConcat('10', '20'))
console.log(addOrConcat(10, '20'))
console.log(addOrConcat('10', 20))
