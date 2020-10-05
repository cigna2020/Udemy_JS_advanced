const timer = (id, deadline) => {           // id - selector (class) в котором расположен таймер на странице

    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),  // метод parse переводит все в миллисекунды; new Date() - возвращает текущее времья
            seconds = Math.floor((t / 1000) % 60),// времья в секундах, % - остаток (секунды) от деление на минуты; Math.floor - округление
            minutes = Math.floor((t / 1000 / 60) % 60), // в скобках получаем часы, остаток от деление - минуты
            hours = Math.floor((t / (1000 * 60 * 60)) % 24), //в скобках получаем общее количество часов,  остаток от деление - часы
            days = Math.floor((t / (1000 * 60 * 60 * 24)));  // общее количество дней

        return {
            'total': t,  // t - все времья в миллисекундах
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();  // вызываем вручную (не через setInterval), чтобы на странице не появлялось дефолтные значения таймера

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);      // в переменную days с id days записываем значение days c функции getTimeRemaining
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {             // выставляем все значение в ноль и останавливаем таймер
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};

export default timer;