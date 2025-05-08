//Значення в інпуті очищене від пробілів по краях
//Якщо інпут порожній або містить лише пробіли, то замість імені
//у спан має підставлятися рядок "Anonymous"

const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    event.currentTarget.value.trim().length === 0
    ? (output.textContent = 'Anonymous')
    : (output.textContent = event.currentTarget.value);
});
