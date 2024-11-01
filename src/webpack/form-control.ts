import isEmail from "validator/lib/isEmail"

const SHOW_ERROR_MESSAGE = 'show-error-message'

const form = document.querySelector('.form') as HTMLFormElement
const username = document.querySelector('.username') as HTMLInputElement
const email = document.querySelector('.email') as HTMLInputElement
const password = document.querySelector('.password') as HTMLInputElement
const confirmPassword = document.querySelector('.confirm-password') as HTMLInputElement

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const target = event.target as HTMLFormElement

  hideErrorMessages(target)
  checkForEmptyFields(username, email, password, confirmPassword)
  checkEmail(email)
  checkPasswords(password, confirmPassword)
  if(shouldSendForm(target)) alert('Form enviado!')
})

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido.')
  }

function checkPasswords(password: HTMLInputElement, confirmPassword: HTMLInputElement): void {
  if (password.value !== confirmPassword.value) {
    showErrorMessage(password, 'As senhas não coincidem!')
    showErrorMessage(confirmPassword, 'As senhas não coincidem!')
  }

  if (password.value.length < 5 && confirmPassword.value.length < 5) {
    showErrorMessage(password, 'A senha precisa ter pelo menos 5 caracteres.')
    showErrorMessage(confirmPassword, 'A senha precisa ter pelo menos 5 caracteres.')
  }
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach(input => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio!')
  })
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE)
  .forEach(item => item.classList.remove(SHOW_ERROR_MESSAGE))
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement
  errorMessage.innerText = msg
  formFields.classList.add(SHOW_ERROR_MESSAGE)
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach(() => (send = false))

  return send
}
