// É como se fosse uma correção de tipos


//      Recomendado

// Condicional
const body1 = document.querySelector('body')
if(body1) body1.style.background = 'red'

// type assertion (NEM sempre vai funcionar)
const body3 = document.querySelector('body') as HTMLBodyElement // <-- Assertion recomendada (usar só quando tiver certeza do tipo)
body3.style.background = 'red'

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement
input.value = 'Qualquer coisa'
input.focus()


//      Não Recomendado

// Non-null assertion (!)
const body2 = document.querySelector('body')! // ! <-- Não pode ser nulo
body2.style.background = 'red'

// Other type assertion
const body4 = (document.querySelector('body') as unknown) as number
