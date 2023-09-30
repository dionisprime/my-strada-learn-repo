function countdown(seconds) {
    // функция обратного отсчета
    let timeLeft = Number(seconds);
    let displayElement = document.getElementById('countdown-display'); // Найти элемент по его id

    let interval = setInterval(function () {
        if (timeLeft === 0) {
            displayElement.textContent = 'Время вышло'; // Обновить текстовое содержимое элемента
            console.log('Время вышло');
            clearInterval(interval);
        } else {
            debugger; // дебаггер остановит скрипт в этом месте
            displayElement.textContent = `Осталось ${timeLeft} сек.`; // Обновить текстовое содержимое элемента
            console.log(`Осталось ${timeLeft}`);
        }
        timeLeft--;
    }, 1000);
}

countdown(20);
