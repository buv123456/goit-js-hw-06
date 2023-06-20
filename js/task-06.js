const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkSymbols);

function checkSymbols() {
    if (inputEl.value.trim().length == inputEl.dataset.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
        return;
    }
    inputEl.classList.remove('valid')
    inputEl.classList.add('invalid')
};

