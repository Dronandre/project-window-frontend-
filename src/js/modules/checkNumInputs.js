const checkNumInputs = (selector) => {

    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            // Используем регулярное выражение для вычесления только цифр
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;