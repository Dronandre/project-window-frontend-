import { post } from "jquery";
import checkNumInputs from "./checkNumInputs";

const forms = (state) => {

    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
          
    // Вызываем функуию валидацию цифр
    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузга...',
        success: 'Спасибо!Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так!'
    };
    // Делаем фунцию для получения данных с сервера
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };
    // Отчищаем инпуты
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };
    // Работаем с формами
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            // Создаем класс статуса отпраки
            let statusMessge = document.createElement('div');
            statusMessge.classList.add('status');
            item.appendChild(statusMessge);

            const formData = new FormData(item);
            // Добаляем дополнительные данные в state, если работаем с формой калькулятора
            if (item.getAttribute('data-calc') === "end") {
                for(let key in state){
                    formData.append(key, state[key]);
                }
            }
            // запускаем фукцию отправки и получения данных
            postData('assets/server.php', formData)
                .then(res =>{
                    console.log(res);
                    statusMessge.textContent = message.success;
                })
                .catch(() =>  statusMessge.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessge.remove();                        
                    }, 5000);
                });
        });
    });
};

export default forms;