// Получаем кнопку, которая открывает всплывающее окно, и само всплывающее окно
const openBtn = document.querySelector('.open-btn');
const popup = document.querySelector('.popup');


// открытие всплывающего окна
openBtn.addEventListener('click', function () {
    popup.style.display = 'block';
});


// закрывает всплывающее окно, если пользователь щелкает на любой элемент вне этого окна
document.addEventListener('click', function (event) {
    // не кнопка? вне окна?
    if (!event.target.classList.contains('open-btn') && !event.target.classList.contains('number-btn')) {
        popup.style.display = 'none';
    }
});

