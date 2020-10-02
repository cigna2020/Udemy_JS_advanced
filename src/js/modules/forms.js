import checkNumInputs from './checkNumInputs';

const forms = (state) => {                  // state - modalState (данные с формы), актуально только для калькулятора

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    // phoneInputs = document.querySelectorAll('input[name = "user_phone"]');      // это input формы // закомент., создали отдельный модуль checkNumInputs


    checkNumInputs('input[name = "user_phone"]');

    // phoneInputs.forEach(item => {                    // закомент., создали отдельный модуль checkNumInputs
    //     item.addEventListener('input', () => {
    //         item.value = item.value.replace(/\D/, '');      // заменяет (удаляет) все НЕ цифры, их просто нельзя ввести
    //     });
    // });

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {        // await - чтобы дождатся ответа от сервера, иначе код будет выполнятся с пустым res
            method: "POST",
            body: data
        });

        return await res.text(); // await, иначе return выполнится без ничего, т.е. без res.text()
    };

    const clearInputs = () => {         // очистить инпуты
        inputs.forEach(item => {
            item.value = '';
        })
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);                // добавляем сообщение в конец формы

            const formData = new FormData(item);    // FormData найдете все импуты формы (item), соберет данные (текст, файлы..., зависит от формы, в нашем слачае Ф.И.О, телефон)
            // if (item.getAttribute('data-calc') === 'end') { // заком., иначе не работает append   // data-calc = 'end' есть только у формы-калькулятора
            for (let key in state) {                        // state - modalState (данные калькулятора), key - ключ масива
                formData.append(key, state[key]);
            }
            // }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });

};

export default forms;