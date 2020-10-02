const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');      // заменяет (удаляет) все НЕ цифры, их просто нельзя ввести
        });
    });
};

export default checkNumInputs;