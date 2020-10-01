import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');        // active без точки, так как в функции используется classList
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');      // > div > div, так как контент обернут в два дива
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');  // > img, т.е. только прямые наследники класса
    forms();

});

