type ColorsObj = typeof colorsObj
type KeyColors = keyof ColorsObj

const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
  amarelo: 'yellow',
  preto: 'black',
  laranja: 'orange',
  rosa: 'pink',
}

function translateColor(color: KeyColors, colors: ColorsObj) {
  return colors[color]
}

console.log(translateColor('vermelho', colorsObj))
console.log(translateColor('verde', colorsObj))
console.log(translateColor('preto', colorsObj))
console.log(translateColor('azul', colorsObj))
