flag = 0;
tog = 0;
let prevPosition = null;

document.querySelectorAll('.box').forEach(item => {



    item.addEventListener('click', function () {

        /*можно бить фигуру!*/
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

            // QUEEN

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}queen`) {
                if (flag == 0) {
                    item.style.backgroundColor = 'pink'
                    document.getElementById(`b${a + 1 * 100}`).style.backgroundColor = 'green'
                    for (let i = 1; i < 4; i++) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    for (let i = 1; i < 5; i++) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    for (let i = 1; i < 3; i++) {
                        document.getElementById(`b${a + i + 100 * i}`).style.backgroundColor = 'green'
                    }
                    for (let i = 1; i < 3; i++) {
                        document.getElementById(`b${a - i + 100 * i}`).style.backgroundColor = 'green'
                    }
                    document.getElementById(`b${a - 1 * 100}`).style.backgroundColor = 'green'

                }
                else {
                    item.style.backgroundColor = 'pink'
                    for (let i = 1; i < 8; i++) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    for (let i = 1; i < 6; i++) {
                        document.getElementById(`b${a - 100 * i}`).style.backgroundColor = 'green'
                    }
                    for (let i = 1; i < 3; i++) {
                        document.getElementById(`b${a + 100 * i}`).style.backgroundColor = 'green'
                    }
                    for (let i = 1; i < 3; i++) {
                        document.getElementById(`b${a + 100 * i + i}`).style.backgroundColor = 'green'
                    }
                    for (let i = 1; i < 6; i++) {
                        document.getElementById(`b${a - 100 * i + i}`).style.backgroundColor = 'green'
                    }
                }
            }

            // KING

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}king`) {
                document.getElementById(`b${a + 1 + 100}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
                document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                item.style.backgroundColor = 'pink'

            }

            // KNIGHT

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}knight`) {
                document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'green'
                document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'green'
                document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'green'
                document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'green'

                item.style.backgroundColor = 'pink'

            }


            //BISHOP

            if (item.innerText == `../../Images/ChessFolder/Chessmen/${toggle}bishop_w`) {

                for (let i = 1; i < 4; i++) {
                    document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                }

                for (let i = 1; i < 5; i++) {
                    document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                }

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

            pinkId = hathiTest.id
            prevPosition = hathiTest.id
            pinkText = hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (flag == 0 && pinkText == "../../Images/ChessFolder/Chessmen/Wqueen" && hathiTest2.id == "b505") {
                        setTimeout(function () {
                            document.getElementById("b605").innerText = pinkText;
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
                        if (flag == 0 && pinkText == "../../Images/ChessFolder/Chessmen/Wqueen" && hathiTest2.id == "b601") {
                            flag = 1;
                            setTimeout(function () {
                                pinkId = "b405"
                                pinkText == "../../Images/ChessFolder/Chessmen/Brook"
                                document.getElementById(pinkId).innerText = ''
                                document.getElementById("b506").innerText = '../../Images/ChessFolder/Chessmen/Bking'
                                coloring()
                                insertImage()
                                flag = 1;
                            }, 200);

                        }
                        else if (flag == 1 && pinkText == "../../Images/ChessFolder/Chessmen/Wqueen" && hathiTest2.id == "b607") {
                            var container = document.getElementById("container");
                            showPopup()
                            tog = -1;
                        }
                        else {
                            setTimeout(function () {
                                document.getElementById(prevPosition).innerText = pinkText;
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






