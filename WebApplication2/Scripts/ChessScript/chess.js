// ������� �����������
function insertImage() {
    // // ���������� ����� querySelectorAll ��� ������ ���� ��������� � ������� "box" �� �������� � ���� forEach ��� �������� ���� ���������
    document.querySelectorAll('.box').forEach(image => {

        //  ���� �� ��������� ���������� � ��������?
        if (image.innerText.length !== 0) {
            // ��������� ����������� � ������� "allimg allpawn"
            if (image.innerText == '../../Images/ChessFolder/Chessmen/Wpawn' || image.innerText == '../../Images/ChessFolder/Chessmen/Bpawn' || image.innerText == '../../Images/ChessFolder/Chessmen/Wpawn_move') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }
            // ��������� ����������� � ������� "allimg"
            else {
                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()



// �����

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


// ������������� ����� ���������� ���������
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})