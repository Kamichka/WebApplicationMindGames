tog = 1

let originalPosition;

document.querySelectorAll('.box').forEach(item => {



    item.addEventListener('click', function () {

        if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    coloring()
                    insertImage()
                }
            })
        }

        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup




        function whosTurn(toggle) {

            // PAWN

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}pawn_move`) {
                item.style.backgroundColor = 'pink'
                document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                document.getElementById(`b${a + 200}`).style.backgroundColor = 'green'
            }

            // KING

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}king`) {

                document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'

                item.style.backgroundColor = 'pink'

            }


            // ROOK

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}rook`) {

                for (let i = 1; i < 6; i++) {
                    document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                }

                for (let i = 1; i < 8; i++) {
                    document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                }

                item.style.backgroundColor = 'pink'
            }

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}rook_move`) {

                for (let i = 1; i < 7; i++) {
                    document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                }

                document.getElementById(`b${a + 1 * 100}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                for (let i = 1; i < 3; i++) {
                    document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                }

                item.style.backgroundColor = 'pink'
            }
        }



        if (tog == 0) {
            whosTurn('N')
        }
        else {
            whosTurn('W')
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
                    if (pinkText == "../../Images/ChessFolder/Chessmen/Wrook_move" && hathiTest2.id == "b705") {
                            setTimeout(function () {
                            document.getElementById("b706").innerText = pinkText;
                                hathiTest2.innerText = '../../Images/ChessFolder/Chessmen/Bpawn';
                            coloring()
                            insertImage()
                        }, 200);
                    }
                    else if (hathiTest2.style.backgroundColor == 'green' && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertImage()
                        if (pinkText == "../../Images/ChessFolder/Chessmen/Wpawn_move" && hathiTest2.id == "b408") {
                            var container = document.getElementById("container");
                            showPopup()
                            tog = 0
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



