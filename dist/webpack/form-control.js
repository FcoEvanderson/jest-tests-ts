"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const SHOW_ERROR_MESSAGE = 'show-error-message';
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const target = event.target;
    hideErrorMessages(target);
    checkForEmptyFields(username, email, password, confirmPassword);
    checkEmail(email);
    checkPasswords(password, confirmPassword);
    if (shouldSendForm(target))
        alert('Form enviado!');
});
function checkEmail(input) {
    if (!(0, isEmail_1.default)(input.value))
        showErrorMessage(input, 'Email inválido.');
}
function checkPasswords(password, confirmPassword) {
    if (password.value !== confirmPassword.value) {
        showErrorMessage(password, 'As senhas não coincidem!');
        showErrorMessage(confirmPassword, 'As senhas não coincidem!');
    }
    if (password.value.length < 5 && confirmPassword.value.length < 5) {
        showErrorMessage(password, 'A senha precisa ter pelo menos 5 caracteres.');
        showErrorMessage(confirmPassword, 'A senha precisa ter pelo menos 5 caracteres.');
    }
}
function checkForEmptyFields(...inputs) {
    inputs.forEach(input => {
        if (!input.value)
            showErrorMessage(input, 'Campo não pode ficar vazio!');
    });
}
function hideErrorMessages(form) {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGE)
        .forEach(item => item.classList.remove(SHOW_ERROR_MESSAGE));
}
function showErrorMessage(input, msg) {
    const formFields = input.parentElement;
    const errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGE);
}
function shouldSendForm(form) {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGE)
        .forEach(() => (send = false));
    return send;
}
//# sourceMappingURL=form-control.js.map