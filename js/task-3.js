`use strict`;
const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    event.currentTarget.value.trim().length === 0
    ? (output.textContent = 'Anonymous')
    : (output.textContent = event.currentTarget.value.trim());
});
