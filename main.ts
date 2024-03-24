tikTacToe(3, 3);

function tikTacToe(size:number, winCount:number):void{
  let turn:number = 0;
  let board:number[] = new Array<number>(size*size);
  let body = document.getElementById('backGroundBoard');
  let boardTable = document.createElement('table');
  body?.append(boardTable);
  boardTable.setAttribute('id','board');
  for (let i = 0; i < size; i++) {
    let tempTR = document.createElement('tr');
    // tempTR.setAttribute('id','tr'+i);
    boardTable.append(tempTR);
    for (let j = 0; j < size; j++) {
      let tempTD = document.createElement('td');
      tempTD.setAttribute('id',`cell${i*size+j}`);
      tempTD.onclick = (ev: MouseEvent) => {
        let symbol:string;
        if (turn%2==0) {
          symbol = "X";
          board[i*size+j] = 1;
        }
        else{
          symbol = "O";
          board[i*size+j] = -1;
        }
        
        tempTD.innerText = symbol;
        console.log(board);
        console.log(turn);
        turn++;
        tempTD.onclick = null;
        let result = check(size, winCount,board)
        if(result == 1){
          let message = document.createElement('text');
          document.getElementById('winnerText')?.append(message);
          message.innerText = 'The winner is X';
          message.setAttribute('style', 'font-size: 180px;');
          diableAllListeners(size);
        }
        if(result == -1){
          let message = document.createElement('text');
          document.getElementById('winnerText')?.append(message);
          message.innerText = 'The winner is O';
          message.setAttribute('style', 'font-size: 180px;');
          diableAllListeners(size);
        }
      };
      tempTR.append(tempTD);
    }
  }
}

function check(size:number, winCount:number, board:number[]):number{
  let countOx = 0;
  let countXx = 0;
  let countOy = 0;
  let countXy = 0;
  for (let i = 0; i < size; i++) {
    countOx = 0;
    countXx = 0;
    countOy = 0;
    countXy = 0;
    for (let j = 0; j < size; j++) {
      let cell = board[i*size + j];
      if (cell == 1) {
        countXx++;
        countOx = 0;
        if(countXx>=winCount) return 1;
      }
      else if(cell == -1){
        countOx++;
        countXx = 0;
        if(countOx>=winCount) return -1;
      }
      else{
        countOx = 0;
        countXx = 0;
      }
      cell = board[i + j*size];
      if (cell == 1) {
        countXy++;
        countOy = 0;
        if(countXy>=winCount) return 1;
      }
      else if(cell == -1){
        countOy++;
        countXy = 0;
        if(countOy>=winCount) return -1;
      }
      else{
        countOy = 0;
        countXy = 0;
      }
    }
  }
  for (let i = 0, counter = 0; i < size*size; i++) {
    countOx = 0;
    countXx = 0;
    countOy = 0;
    countXy = 0;
    for (let j = 0; j <= i; j++) {
      let k = i-j;
      if (k >= size || j >= size) continue;
      let cell = board[j*size+k];
      if (cell == 1) {
        countXx++;
        countOx = 0;
        if(countXx>=winCount) return 1;
      }
      else if(cell == -1){
        countOx++;
        countXx = 0;
        if(countOx>=winCount) return -1;
      }
      else{
        countOx = 0;
        countXx = 0;
      }
      cell = board[j*size-k+size-1];
      if (cell == 1) {
        countXy++;
        countOy = 0;
        if(countXy>=winCount) return 1;
      }
      else if(cell == -1){
        countOy++;
        countXy = 0;
        if(countOy>=winCount) return -1;
      }
      else{
        countOy = 0;
        countXy = 0;
      }
    }
    console.log(counter);
  }
  return 0;
}

function diableAllListeners(size:number):void{
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      document.getElementById(`cell${i*size+j}`)!.onclick = null;
    }
  }
}