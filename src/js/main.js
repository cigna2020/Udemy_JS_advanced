import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};   // обьект куда будут записыватся данные с формы-калькулятора
    let deadline = '2020-12-31';    // данные для функции timer

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');        // active без точки, так как в функции используется classList
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');      // > div > div, так как контент обернут в два дива
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');  // > img, т.е. только прямые наследники класса
    forms(modalState);      // modalState в форме - для того, чтобы работать с данными 
    timer('.container1', deadline);

});
