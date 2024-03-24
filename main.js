tikTacToe(5, 3);
function tikTacToe(size, winCount) {
    var turn = 0;
    var board = new Array(size * size);
    var body = document.querySelector('body');
    var boardTable = document.createElement('table');
    body === null || body === void 0 ? void 0 : body.append(boardTable);
    console.log("You is suckballser");
    boardTable.setAttribute('id', 'board');
    var _loop_1 = function (i) {
        var tempTR = document.createElement('tr');
        // tempTR.setAttribute('id','tr'+i);
        boardTable.append(tempTR);
        var _loop_2 = function (j) {
            var tempTD = document.createElement('td');
            tempTD.setAttribute('id', "cell".concat(i * size + j));
            tempTD.onclick = function (ev) {
                var symbol;
                if (turn % 2 == 0) {
                    symbol = "X";
                    board[i * size + j] = 1;
                }
                else {
                    symbol = "O";
                    board[i * size + j] = -1;
                }
                tempTD.innerText = symbol;
                console.log(board);
                console.log(turn);
                turn++;
                tempTD.onclick = null;
                var result = check(size, winCount, board);
                //if(result == 1) window.alert("X WON");
                if (result == 1) {
                    var message = document.createElement('text');
                    body === null || body === void 0 ? void 0 : body.append(message);
                    message.innerText = 'The winner is X';
                    message.setAttribute('style', 'font-size: 180px;');
                }
                if (result == -1) {
                    var message = document.createElement('text');
                    body === null || body === void 0 ? void 0 : body.append(message);
                    message.innerText = 'The winner is O';
                    message.setAttribute('style', 'font-size: 180px;');
                }
                //if(result == -1) window.alert("O WON");
            };
            tempTR.append(tempTD);
        };
        for (var j = 0; j < size; j++) {
            _loop_2(j);
        }
    };
    for (var i = 0; i < size; i++) {
        _loop_1(i);
    }
}
function check(size, winCount, board) {
    var countOx = 0;
    var countXx = 0;
    var countOy = 0;
    var countXy = 0;
    for (var i = 0; i < size; i++) {
        countOx = 0;
        countXx = 0;
        countOy = 0;
        countXy = 0;
        for (var j = 0; j < size; j++) {
            var cell = board[i * size + j];
            if (cell == 1) {
                countXx++;
                countOx = 0;
                if (countXx >= winCount)
                    return 1;
            }
            else if (cell == -1) {
                countOx++;
                countXx = 0;
                if (countOx >= winCount)
                    return -1;
            }
            else {
                countOx = 0;
                countXx = 0;
            }
            cell = board[i + j * size];
            if (cell == 1) {
                countXy++;
                countOy = 0;
                if (countXy >= winCount)
                    return 1;
            }
            else if (cell == -1) {
                countOy++;
                countXy = 0;
                if (countOy >= winCount)
                    return -1;
            }
            else {
                countOy = 0;
                countXy = 0;
            }
        }
    }
    for (var i = 0, counter = 0; i < size * size; i++) {
        countOx = 0;
        countXx = 0;
        countOy = 0;
        countXy = 0;
        for (var j = 0; j <= i; j++) {
            var k = i - j;
            if (k >= size || j >= size)
                continue;
            var cell = board[j * size + k];
            if (cell == 1) {
                countXx++;
                countOx = 0;
                if (countXx >= winCount)
                    return 1;
            }
            else if (cell == -1) {
                countOx++;
                countXx = 0;
                if (countOx >= winCount)
                    return -1;
            }
            else {
                countOx = 0;
                countXx = 0;
            }
            cell = board[j * size - k + size - 1];
            if (cell == 1) {
                countXy++;
                countOy = 0;
                if (countXy >= winCount)
                    return 1;
            }
            else if (cell == -1) {
                countOy++;
                countXy = 0;
                if (countOy >= winCount)
                    return -1;
            }
            else {
                countOy = 0;
                countXy = 0;
            }
        }
        console.log(counter);
    }
    return 0;
}
