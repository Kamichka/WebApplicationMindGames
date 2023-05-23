
// Определение переменных
var total_rows = values.length;  // Общее количество строк
var total_cols = values[0].length; // Общее количество столбцов
var current = null; // Текущая выбранная клетка


// Функция для создания таблицы с клетками
function createFrameBoxes() {
     
    var boxes = "";// Создание пустой строки для таблицы
    for (let i = 0; i < values.length; i++) {

        boxes += "<tr>";// Добавление начального тега <tr> для каждой строки таблицы

        for (let j = 0; j < values[i].length; j++) {
            var s = spans_value[i + "," + j] ?? ""; // Получение значения из переменной spans_value для текущих координат (i, j) или пустой строки, если значения нет
            boxes += ` <th onclick='myclick(this)' row='${i}' col='${j}' class="${values[i][j]}"><span>${s}</span><b></b></th>`; // Формирование ячейки таблицы с классом, координатами строки и столбца
        }

        boxes += "</tr>"; // Добавление закрывающего тега </tr> для каждой строки таблицы
    }

    document.getElementById("table").innerHTML = boxes; // Установка содержимого таблицы с идентификатором "table"
}

createFrameBoxes(); // Непосредственный вызов метода для построения кроссворда

// Обработчик события клика на клетку
function myclick(box) { 

    if (box.classList.contains("w")) { // Проверка, содержит ли элемент класс "w" - обозначение белой клетки кроссворда, в которую можно писать

        if (current != null) {
            current.style.background = "transparent";  // Если у текущего элемента есть значение, сброс его фонового цвета на прозрачный
        }

        current = box;  // Присвоение текущему элементу значения выбранной клетки
        current.style.background = "#F4A460";  // Установка фонового цвета выбранной клетки на светло-оранжевый
    }
}

// Обработчик события нажатия клавиши на клавиатуре
document.body.onkeyup = function (event) {
    if (current != null) {

        //проверка, что код клавиши находится в диапазоне от 37 до 40, что соответствует клавишам стрелок влево, вверх, вправо и вниз.
        if (event.keyCode >= 37 && event.keyCode <= 40) {
            nextmover(event.keyCode); //вызов метода nextmover
        }

        // Если нажата клавиша с кодом в диапазоне от 65 до 90 (символы A-Z)
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            current.querySelector("b").innerHTML = event.key; //вставка буквы в белую клетку
        }

        // Проверка, что код клавиши равен 8 (Backspace) или 46 (Delete).
        if (event.keyCode == 8 || event.keyCode == 46) { 
            current.querySelector("b").innerHTML = ""; //удаление текста из белой клетки
        }

    }
}


// Функция для перемещения на следующую клетку
function nextmover(code) {

     // Получение текущих координат строки и столбца из атрибутов текущей клетки
    var row = parseInt(current.getAttribute("row"));
    var col = parseInt(current.getAttribute("col"));

    // Изменение координаты в зависимости от кода клавиши
    switch (code) { 
        case 37:// Код клавиши влево
            col = col == 0 ? total_cols - 1 : col - 1; // Если столбец равен 0, переход к последнему столбцу, иначе уменьшение номера столбца на 1
            break;
        case 38: // Код клавиши вверх
            row = row == 0 ? total_rows - 1 : row - 1; // Если строка равна 0, переход к последней строке, иначе уменьшение номера строки на 1
            break;
        case 39: // Код клавиши вправо
            col = col == total_cols - 1 ? 0 : col + 1; // Если столбец равен последнему столбцу, переход к первому столбцу, иначе увеличение номера столбца на 1
            break;
        case 40: // Код клавиши вниз
            row = row == total_rows - 1 ? 0 : row + 1; // Если строка равна последней строке, переход к первой строке, иначе увеличение номера строки на 1
            break;
    }

    // Если текущая клетка является белой клеткой, сброс ее фона на прозрачный
    if (current.classList.contains("w")) { 
        current.style.background = "transparent";
    }

    // Получение новой текущей клетки на основе обновленных координат
    current = document.querySelectorAll("tr")[row].querySelectorAll("th")[col];

    // Если новая текущая клетка является черной клеткой, рекурсивный вызов функции nextmover
    if (current.classList.contains("b")) {
        nextmover(code);
    }

    // Иначе установка фона новой текущей клетки в светло-оранжевый
    else {
        current.style.background = "#F4A460";
    }

}

// Проверка ответов на правильность
function key_check() {
    //Выбор белых клеток в массив
    var whites = document.querySelectorAll(".w");

    // Перебор каждой белой клетки
    whites.forEach(element => {

        var text = element.querySelector("b").innerHTML;

        // Проверка, содержит ли клетка текст
        if (text.length > 0) {
            var row = element.getAttribute("row");// Получение номера строки из атрибута
            var col = element.getAttribute("col");// Получение номера столбца из атрибута

            // Сравнение текста с правильным ответом, полученным из ans_key с данными координатами
            if (text == ans_key[row][col]) {
                element.style.background = "#98FB98"; // Если текст совпадает, устанавливаем фон клетки на зеленый
            }
            else {
                element.style.background = "#CD5C5C"; // Если текст не совпадает, устанавливаем фон клетки на красный
            }
        }

    })
}

//Функция заполнения верных ответов
function fillAnswers() {
    var table = document.getElementById("table"); // Получение таблицы по ее идентификатору
    var cells = table.getElementsByTagName("th"); // Получение всех ячеек таблицы (элементы <th>)

    // Перебор каждой ячейки таблицы
    for (let i = 0; i < cells.length; i++) {
        var row = cells[i].getAttribute("row"); // Получение номера строки из атрибута
        var col = cells[i].getAttribute("col"); // Получение номера столбца из атрибута
        var answer = ans_key[row][col]; // Получение правильного ответа из массива ans_key

        cells[i].querySelector("b").innerHTML = answer; // Установка текста правильного ответа в элемент <b> внутри ячейки
    }
}

//Функция возобновления текущей игры
function restart() {
    //Выбор белых клеток
    var cells = document.querySelectorAll(".w");

    // Очистка содержимого клеток
    cells.forEach(function (cell) {
        cell.querySelector("b").innerHTML = "";
    });

    // Сброс фонового цвета клеток на белый
    cells.forEach(function (cell) {
        cell.style.background = "white";
    });

    // Сброс текущей выбранной клетки
    current = null;
}

//Функция начала новой игры
function new_game() {
    location.reload();//перезагрузка страницы
}

//Обработчик события beforeunload к объекту window
window.addEventListener('beforeunload', function (event) {
    event.preventDefault(); // Отмена стандартного действия перед выгрузкой страницы
    event.returnValue = 'Вы уверены, что хотите покинуть страницу? Ваши данные могут быть потеряны.';
});
