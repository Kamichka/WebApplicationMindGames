// Вставка изображений
function insertImage() {
    // // Используем метод querySelectorAll для выбора всех элементов с классом "box" на странице и цикл forEach для перебора всех элементов
    document.querySelectorAll('.box').forEach(image => {

        //  есть ли текстовое содержимое в элементе?
        if (image.innerText.length !== 0) {
            // Добавляем изображение с классом "allimg allpawn"
            if (image.innerText == '../../Images/ChessFolder/Chessmen/Wpawn' || image.innerText == '../../Images/ChessFolder/Chessmen/Bpawn' || image.innerText == '../../Images/ChessFolder/Chessmen/Wpawn_move') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }
            // Добавляем изображение с классом "allimg"
            else {
                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()



// доска

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(100, 75, 43)'
        }
        if (a % 2 != 0) {
            color.style.backgroundColor = 'rgb(240, 201, 150)'
        }

    })
}
coloring()


// Предотвращает выбор нескольких элементов
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})