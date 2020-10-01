const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'); // data-modal - data-атрибут для всех модальных окон

        // trigger.addEventListener('click', (e) => {            // заком., работает только с querySelector
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {

                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {               // закрываем все открытые модальные окна
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';        // страница под модальн.окном не будет скролится
                // document.body.classList.add('modal-open');          // класс из bootstrap, вместо вышеуказанного кода          
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {               // закрываем все открытые модальные окна
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');       // класс из bootstrap, вместо вышеуказанного кода
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {          // closeClickOverlay = false нужно передать при вызове функции чтобы "подложка" не закрывала модальное окно
                windows.forEach(item => {               // закрываем все открытые модальные окна
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');     // класс из bootstrap, вместо вышеуказанного кода
            }
        });

    }
    // const callEngineerBtn = document.querySelector('.popup_engineer_btn'),           // заком., в начале добавили селекторы
    //     modalEngineer = document.querySelector('.popup_engineer'),
    //     modalENgineerClose = document.querySelector('.popup_engineer .popup_close');

    function showModalByTime(selector, time) {          // что-бы мод.окно появлялось со временем
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);


    // showModalByTime('.popup', 50000);

};

export default modals;