var board = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
]
var player;
var c;
var r;
var start;
var boardPlay;
var columnTracker = {
  column0: 0,
  column1: 0,
  column2: 0,
  column3: 0,
  column4: 0,
  column5: 0,
  column6: 0
}


document.addEventListener('DOMContentLoaded', function(e) {
  board = document.getElementById('board');
  boardPlay = document.getElementById('boardplay');
  player = document.getElementsByClassName('player');
  r = document.getElementsByClassName('boardplay'[0]);
  c = document.getElementsByClassName('boardplay'[1]);
  red = document.getElementsByClassName('red');
  black= document.getElementsByClassName('black');
  start = document.getElementById('start');

  
  player = player === 'red' ? 'black' : 'red';

  document.addEventListener('click', function(e) {
    console.log(e.target.classList);
    let r = e.target.classList[0];
    let c = e.target.classList[1];
    
    columnTracker[c]++;
    //checkForWin();
    fillSpot(c);
    gameStart();
    drawBoard();
  })

  function gameStart() {
    if (start === true) {
      return false;
    }
      start = true;
  
  }

  function drawBoard() {
    checkForWin();
    for (c = 0; c <= 6; c++) {
      for (r = 0; r <= 5; r++) {
        document.getElementsByClassName('boardplay').value;
      }
    }
  }

  function setTurn() {
    if (start) {
      player = true;
      player++;
      document.getElementById('gameboard').textContent = 'player';
    }
  }
  function fillSpot(c) {
    for (r = 5; r >= c; r--) {
      if (board[c][r] === 0) {
        board[c][r] = player;
        drawBoard();
        player++;
      }  
    }
  }

  function checkForWin() {
  //check left to right
    for (var i = 0; i <= board; i++) {
      for (c = 0; c <= board; c++) {
        for (r = 0; r <= board; r++) {
          if (board[r][c] === i) {
            if ((board[r][c + 1] === i) && (board[r][c + 2] === i) && (board[r][c + 3] === i)) {
              endGame(i);
              return true;
            }
          }
        }
      }
    }
  //top to bottom
    for (var i = 0; i <= board; i++) {
      for (c = 0; c <= board; c++) {
        for (r = 0; r <= board; r++) {
          if (board[r][c] === i) {
            if ((board[r + 1][c] === i) && (board[r + 2][c] === i) && (board[r + 3][c] === i)) {
              endGame(i);
              return true;
            }
          }
        }
      }
    }
  //check diag down
    for (var i = 0; i <= board; i++) {
      for (c = 0; c <= board; c++) {
        for (r = 0; r <= board; r++) {
          if (board[r][c] === i) {
            if ((board[r + 1][c + 1] === i) && (board[r + 2][c + 2] === i) && (board[r + 3][c + 3] === i)) {
              endGame(i);
              return true;
            }
          }
        }
      }
    }
  //check diag up
    for (var i = 0; i <= board; i++) {
      for (c = 0; c <= board; c++) {
        for (r = 3; r <= board; r++) {
          if (board[r][c] === i) {
            if ((board[r - 1][c + 1] === i) && (board[r - 2][c + 2] === i) && (board[r - 3][c + 3] === i)) {
              endGame(i);
              return true;
            }
          }
        }
      }
    }
  }
})