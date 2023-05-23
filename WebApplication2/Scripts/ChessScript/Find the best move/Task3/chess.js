flag = 0;
tog = 0;
let prevPosition = null;

document.querySelectorAll('.box').forEach(item => {



    item.addEventListener('click', function () {



        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup




        function whosTurn(toggle) {
            // KING

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}king`) {
                document.getElementById(`b${a + 1 + 100}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
                document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                item.style.backgroundColor = 'pink'

            }

            // PAWN

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}pawn`) {
                document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'

                item.style.backgroundColor = 'pink'

            }


            //BISHOP

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}bishop_w`) {

                for (let i = 1; i < 7; i++) {
                    document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                }
                    document.getElementById(`b${a + 1 * 100 + 1}`).style.backgroundColor = 'green'

                item.style.backgroundColor = 'pink'


            }
            
        }




        if (tog != -1) {
            tog++;
            whosTurn('W')
        }
        else {
            whosTurn('N')
        }

    })

})

function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}
function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}



document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'pink') {

            originalPosition = hathiTest.id;
            pinkId = hathiTest.id
            pinkText = hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'green' && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertImage()
                        if (pinkText == "../../Images/ChessFolder/Chessmen/Wbishop_w" && hathiTest2.id == "b404") {
                            var container = document.getElementById("container");
                            showPopup()
                            tog = -1;
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








