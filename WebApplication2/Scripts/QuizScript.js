
//Функция получения верных ответов
function GetAnswers() {
    // Выбор всех элементов с классом ".radoption"
    var radOptions = document.querySelectorAll(".radoption");

    // Проход по каждому выбранному элементу
    for (var i = 0; i < radOptions.length; i++) {
        // Установка стиля display на "block"
        radOptions[i].style.display = "block";

        // Устанановка свойства disabled на true
        radOptions[i].disabled = true;
    }
}

//Функция возобновления текущей игры
function restart() {
    // Выбор всех радиокнопок с типом "radio"
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    // Сброс состояния каждой радиокнопки
    radioButtons.forEach(function (radioButton) {
        radioButton.checked = false;
    });

    // Выбор всех меток с классом "radoption"
    const optionLabels = document.querySelectorAll('label.radoption');

    // Скрытие каждой метки
    optionLabels.forEach(function (optionLabel) {
        optionLabel.style.display = 'none';
    });

    // Выбор все меток с классом "choice"
    const choiceLabels = document.querySelectorAll('label.choice');

    // Восстанавление цвета каждой метки на черный
    choiceLabels.forEach(function (choiceLabel) {
        choiceLabel.style.color = 'black';
    });

    // Очищение содержимого элемента с идентификатором "result" - результата прохождения викторины
    document.getElementById("result").innerHTML = "";
}

//Функция начала новой игры
function NewGame() {
    location.reload();
}


//Функция проверки и отображения результатов
function displayresult() {
    // Очищение содержимое элемента с идентификатором "Selectedradio"
    document.getElementById("Selectedradio").innerHTML = "";

    // Получение всех элементов input на странице
    var results = document.getElementsByTagName('input');

    // Получение всех элементов с классом "choice"
    var choices = document.querySelectorAll('.choice');

    // Инициализация переменных
    var questionNumber = 0;
    var count_correct_answer = 0;
    var count_chosen = 0;

    // Перебор всех элементов input
    for (i = 0; i < results.length; i++) {
        // Проверка, является ли текущий элемент input радиокнопкой
        if (results[i].type == "radio") {
            // Проверка, выбрана ли радиокнопка
            if (results[i].checked) {
                count_chosen++; // инкрементация счетчика
            }
            questionNumber++;
        }
    }

    // Вычисление общего количества вопросов путем деления на 3 (так как каждый вопрос состоит из 3 радиокнопок)
    questionNumber /= 3;

    // Проверка на то, что все вопросы были отвечены
    if (count_chosen < questionNumber) {
        alert("Пожалуйста, ответьте на все вопросы.");//в противном случае, выброс предупреждения и завершение функции
        return;
    }

    // Проверка каждого результата
    for (i = 0; i < results.length; i++) {
        // Получение правильного ответа для текущего вопроса
        var correctAnswer = results[i].parentNode.querySelector("label.radoption");
        var correctAnswerText = correctAnswer.textContent.substring(correctAnswer.textContent.indexOf(":") + 1).trim();

        // Сравнение ответа пользователя с правильным ответом
        if (choices[i].textContent == correctAnswerText) {
            choices[i].style.color = "green"; // Отметка правильного ответа зеленым цветом
        }

        // Проверка на то, является ли текущий элемент input радиокнопкой
        if (results[i].type == "radio") {
            // Проверка на радиокнопку
            if (results[i].checked) {
                // Сравнение выбранного ответа с правильным ответом
                if (results[i].value == correctAnswerText) {
                    count_correct_answer++; // Увеличение счетчика правильных ответов
                } else {
                    choices[i].style.color = "red"; // Отметка неправильного ответа красным цветом
                }
            }
        }

        // Вывод результатов пользователя
        document.getElementById("result").innerHTML = "Ваш результат: " + count_correct_answer + " верных ответа из " + questionNumber + "<br />";
    }
}

//Обработчик события beforeunload к объекту window
window.addEventListener('beforeunload', function (event) {
    event.preventDefault(); // Отмена стандартного действия перед выгрузкой страницы
    event.returnValue = 'Вы уверены, что хотите покинуть страницу? Ваши данные могут быть потеряны.';
});