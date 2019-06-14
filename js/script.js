var board = []; 
var player = 'red';
var message = '';
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
  restartBtn = document.getElementById('restartbtn'); 
  game = document.getElementsByClassName('game');
  row = document.getElementsByClassName('row');
  column = document.getElementsByClassName('column');
  message = document.getElementById('message');
  cats = document.getElementById('cats');

  board.addEventListener('click',fillSpot);
  restartBtn.addEventListener('click', init);
});

function init() {
  console.log('hello reset')
  columnTracker = {
    column0: 0,
    column1: 0,
    column2: 0,
    column3: 0,
    column4: 0,
    column5: 0,
    column6: 0
  }
  let squareds = document.querySelectorAll('.playground')
  squareds.forEach( function(square) {
    message.textContent = '';
    square.classList.remove('red','black');
  })
  board.addEventListener('click',fillSpot);
}

function checkForWin(el, color) {
  console.log("In checkForWin, this is the el:", el);
  let winConditions = Array.from(el.classList).filter(function(condition) {
    return condition !== 'playground' && condition !== 'red' && condition !== 'black'
  });
  let squares;
  for (let condition of winConditions) {
    squares = document.getElementsByClassName(condition);
    let count = 1;
    for (let i = 1; i < squares.length; i++) {
      // if current square classList contains current player
      if (squares[i].classList.contains(player) && squares[i-1].classList.contains(player)) {
        count++;
      } else {
        count = 1; 
      }
      if (count > 3) {
        endGame();
      }
    }
  }
}

function fillSpot(e) {
  let column = e.target.classList[2];
  let row = 6 - columnTracker[column];
  if (row > 0) {
    columnTracker[column]++;
    let spot = document.getElementsByClassName(column)[row];
    player = player === 'red'? 'black' : 'red';
    spot.classList.add(player);
    checkForWin(spot, player);
    console.log(spot);
  }
}

function endGame() {
  board.removeEventListener('click', fillSpot);
  message.textContent = player.toUpperCase() + ' player you are the winner!';
}

function catsGame() {
  board.removeEventListener('click', fillSpot); 
  cats.textContent = 'Its a tie! You both Suck!'; 
}
