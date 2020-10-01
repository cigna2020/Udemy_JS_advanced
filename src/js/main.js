import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');        // active без точки, так как в функции используется classList
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');      // > div > div, так как контент обернут в два дива
    forms();

});

