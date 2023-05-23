// Получаем модальное окно и кнопку для его открытия
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("openModal1");

// Получаем элемент для закрытия модального окна
var span1 = document.getElementsByClassName("close")[0];

// Открываем модальное окно при нажатии на кнопку
btn1.onclick = function () {
    modal1.style.display = "block";
}

// Закрываем модальное окно при нажатии на элемент для закрытия
span1.onclick = function () {
    modal1.style.display = "none";
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("openModal2");
var span2 = document.getElementsByClassName("close")[1];

btn2.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}



// Закрываем модальное окно при нажатии на любой элемент вне модального окна
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}