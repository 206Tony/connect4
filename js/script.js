var board; 
var player = 'red';
var topRow;
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
  topRow = document.getElementsByClassName('toprow');
  red = document.getElementsByClassName('red');
  black= document.getElementsByClassName('black');
  start = document.getElementById('start');

  board.addEventListener('click', function(e) {
    console.log(e.target.classList);
    gameStart();
    drawBoard();
    fillSpot(e);
    checkForWin(spot, player);
    endGame();
  })
})

function gameStart() {
  if (start === true) {
    document.getElementById('start');
    return false;
  }
    start = true;
}

function drawBoard() {
  for (c = 0; c <= 6; c++) {
    for (r = 0; r <= 5; r++) {
      document.getElementsByClassName('boardplay').value;
    }
  }
}
// loop through classlist of element that you just filled in fillSpot
// filter non winconditions from classlist

function checkForWin(el, color) {
  let winConditions = [];
  let squares;
  winConditions.push(el.parentElement.classList.item(1));
  winConditions.push(el.classList.item(1));

  for (let condition of winConditions) {
    if (condition.slice(0,3) === "row") {
      squares = el.parentElement.children;
    } else {
      squares = document.getElementsByClassName(condition);
    }
    let count = 1
    // loop over squares
    for (let i = 1; i < squares.length; i++) {
      // if current square classList contains current player
      if (squares[i].classList.contains(player) && squares[i-1].classList.contains(player)) {
        // increment count
        console.log("we found a match, incrementing count")
        count++;
      } else {
        // if they don't match, reset counter to 1
        console.log()
        count = 1;
      }
      // at end of loop, if we've found 4 or more, they win
      if (count > 3) {
        // game is over
        console.log("we won!");
        endGame();
      }
    }
  }
}

function endGame() {
  // checkForWin(spot, player);
  startGame = false;
  document.getElementById('board').textContent = 'winner: ' + player;
}

function fillSpot(e) {
  let column = e.target.classList[2];
  // e.target.classList
  let row = 6 - columnTracker[column];
  columnTracker[column]++;
  let spot = document.getElementsByClassName(column)[row];
  spot.classList.add(player);
  checkForWin(spot, player);
  player = player === 'red' ? 'black' : 'red';

}