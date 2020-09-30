const modals = () => {

    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';        // страница под модальн.окном не будет скролится
            // document.body.classList.add('modal-open');          // класс из bootstrap, вместо вышеуказанного кода          
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');       // класс из bootstrap, вместо вышеуказанного кода
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');     // класс из bootstrap, вместо вышеуказанного кода
            }
        });

    }

    const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
        modalEngineer = document.querySelector('.popup_engineer'),
        modalENgineerClose = document.querySelector('.popup_engineer .popup_close');

    bindModal(callEngineerBtn, modalEngineer, modalENgineerClose);

};

export default modals;