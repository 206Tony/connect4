var board = []; 
var player = 'red';
var columnTracker = {
  column0: 0,
  column1: 0,
  column2: 0,
  column3: 0,
  column4: 0,
  column5: 0,
  column6: 0
};


document.addEventListener('DOMContentLoaded', function(e) {
  board = document.getElementById('board');
  // red = document.getElementsByClassName('red');
  // black = document.getElementsByClassName('black');
  restartBtn = document.getElementById('restartbtn'); 
  game = document.getElementsByClassName('game');
  playGround = document.getElementsByClassName('playground');

  board.addEventListener('click', function(e) {
    console.log("classes of the element we clicked on:", e.target.classList);
    fillSpot(e);
    if (endGame(true)) {
      e.removeEventListener();
    }
  })
  restartBtn.addEventListener('click', function(e) {
  console.log(e.target);
  let els = document.getElementsByClassName('player');
    for (el of els) {
      el.classList.remove('black', 'red');
    }
    init();
  })
});

function init() {
  board = [];
  columnTracker = {
    column0: 0,
    column1: 0,
    column2: 0,
    column3: 0,
    column4: 0,
    column5: 0,
    column6: 0
  }
}

// loop through classlist of element that you just filled in fillSpot
// filter non winconditions from classlist
function checkForWin(el, color) {
  console.log("In checkForWin, this is the el:", el);
  let winConditions = [];
  let squares;
  winConditions.push(el.classList.item(1));
  winConditions.push(el.classList.item(2));
  console.log(winConditions);

  for (let condition of winConditions) {
    if (condition.slice(0,3) === "row") {
      squares = el.children; //parentElement.children;
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
        console.log("no match")
        count = 1;
      }
      // at end of loop, if we've found 4 or more, they win
      if (count >= 3) {
        // game is over
        console.log("we won!");
        endGame();
        
      }
    }
  }
}

function endGame() {
  document.getElementsByClassName('board');
}

function fillSpot(e) {
  let column = e.target.classList[2];
  let row = 6 - columnTracker[column];
  console.log("this is row:", row);
  if (row > 0) {
    columnTracker[column]++;
    let spot = document.getElementsByClassName(column)[row];
    player = player === 'red'? 'black' : 'red';
    spot.classList.add(player);
    checkForWin(spot, player);
  } 
}


