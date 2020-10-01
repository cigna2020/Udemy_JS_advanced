const forms = () => {

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name = "user_phone"]');      // это input формы

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');      // заменяет (удаляет) все НЕ цифры, их просто нельзя ввести
        });
    });

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

            const formData = new FormData(item);    // FormData найдете все импуты формы (item), соберет данные (текст, файлы..., зависит от формы)

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