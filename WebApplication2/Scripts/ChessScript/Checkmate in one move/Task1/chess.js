tog = 1 // для блокировки

/* определение предыдущей позиции для возврата */
let originalPosition;

document.querySelectorAll('.box').forEach(item => {



    item.addEventListener('click', function () {

        // координаты местоположения фигуры 
        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup



        // Функция для отображения доступных ходов фигур

        function whosTurn(toggle) {

            // PAWN

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}pawn`) {
                item.style.backgroundColor = 'pink'
                document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                document.getElementById(`b${a + 200}`).style.backgroundColor = 'green'
            }



            // KING

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}king`) {
                document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                item.style.backgroundColor = 'pink'

            }



            // ROOK

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}rook`) {
                for (let i = 1; i < 8; i++) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                }

                for (let i = 1; i < 4; i++) {
                    document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                }

                item.style.backgroundColor = 'pink'
            }
        }


        
        // блок
        if (tog == 0) {
            whosTurn('N')
        }
        else {
            whosTurn('W')
        }

    })

})

/* правильно */
function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}
/* крестик */
function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}


// движение фигур
document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'pink') {
            originalPosition = hathiTest.id;

            /* координаты фигуры первые*/
            pinkId = hathiTest.id
            /* какая фигура? */
            pinkText = hathiTest.innerText
            
            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'green' && hathiTest2.innerText.length == 0) {
                        /*убираю фигуру с предыдущей клетки*/
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertImage()
                        if (pinkText == "../../Images/ChessFolder/Chessmen/Wrook" && hathiTest2.id == "b801") {
                            var container = document.getElementById("container");
                            showPopup()
                            tog = 0;
                        }
                        else {
                            setTimeout(function () {
                                document.getElementById(originalPosition).innerText = pinkText;
                                hathiTest2.innerText = '';
                                coloring()
                                insertImage()

                            }, 200);
                        }
                    }

                })
            })

        }

    })
    
})



