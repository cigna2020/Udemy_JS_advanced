const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),          // блок, который объединяет все табы
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';        // скрыли весь контент табов
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }


    function showTabContent(i = 0) {                 // 0 - чтобы отобразить первый таб при загрузке страницы
        content[i].style.display = display;         // нужно проверить, чтобы в верстке был "блок", "і" - индекс таба
        tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();                                // можно подставить цифру, чтобы отобразить НЕ первый таб при загрузке страницы


    // Делегирование событий (отслеживание таба, на который кликнули)
    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&                       // проверяем таргет, потому-что некоторые элементы не поддержывают событие click                                              
            (target.classList.contains(tabSelector.replace(/\./, "")) || // проверяем, если кликнули на таб, tabSelector - это класс, поэтому нужно удалить точку
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {  // проверяем, если кликнули не в сам элемент, а в его дечерний элемент
            tab.forEach((item, i) => {                              //получем индекс таба
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;