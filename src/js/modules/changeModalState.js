import checkNumInputs from './checkNumInputs';


// будет управлять данными с формы калькулятора

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),  // поучаем форму выбраного балкона из первого окна-калькулятора
        windowWidth = document.querySelectorAll('#width'),                 // поучаем ширину из первого окна-калькулятора (данные input), везде All, так как используем forEach 
        windowHeigt = document.querySelectorAll('#height'),                // поучаем высоту из первого окна-калькулятора (данные input)
        windowType = document.querySelectorAll('#view_type'),              // поучаем тип из второго окна-калькулятора (select)
        windowProfile = document.querySelectorAll('.checkbox');         // поучаем профиль (холод/тепло) из второго окна-калькулятора (checkbox)

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(event, elem, prop) {         // prop - то как будет называтся поле в modalState из main.js 
        elem.forEach((item, i) => {                          // elem - переменная (windowForm или windowWidth и т.д)  
            item.addEventListener(event, () => {          // item - изображение балкона
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j) => {      // elem = windowProfile
                                box.checked = false;        // убрать все галочки
                                if (i == j) {               // если индексы совпадают (отчечено то, на что кликнули)
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
                // if (elem.length > 1) {      // заком., не подходит для windowType (select) & windowProfile (checkbox), используем nodeName  // больше чем 1 только windowForm
                //     state[prop] = i;       // state - это modalState из main.js (указать при импорте в main.js), который будет создано новое поле form из индексом балкона
                // } else {
                //     state[prop] = item.value;       // для данных высоты и ширины
                // }
                // console.log(state);
            });
        });
    }
    // windowForm.forEach((item, i) => {                   // заком., создали отдельную функции (см.выше) для всех переменных
    //     item.addEventListener('click', () => {          // item - изображение балкона
    //         state.form = i;                             // state - это modalState из main.js (указать при импорте в main.js), который будет создано новое поле form из индексом балкона
    //         console.log(state);
    //     });
    // });

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeigt, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

};

export default changeModalState;