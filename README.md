# Connect4

### Strategy
  My strategy for building Connect 4 was a wireframe, basic layout, psuedo-code, implementation.
  My HTML and CSS were fairly straight forward. I generarated a boilerplate for the HTML and installed 
  the appropriate elements. My CSS was decided when needed. I started writing the script by creating all 
  my necessary variables and scoping them globaly. Then I gave them connectivity to my HTML and CSS by 
  adding the appropriate DOM methods. Next I gave added my eventListeners. From there I went into the win logic.
  
#### Challenge 1 Win Logic
  I needed to figure out how to call the class of elements that I had created in my boilerplate.
  I created a function called checkForWins that used an Array named winConditions to go through 
  all 42 divs and filter only the elements I was going to check a win against.  They are row, column,
  and the diagonals.
  
```
function checkForWin(el, color) {
  let winConditions = Array.from(el.classList).filter(function(condition) {
    return condition !== 'playground' && condition !== 'red' && condition !== 'black';
  });
  
  Next I created the loop that would go thru and check the classList elements for a match for the players 
  colored piece. I set a counter to increment each time there was a match. Then using an if else statement
  checked any matches.  If there was a match add 1 to the counter and loop again. This happened until 4 of 
  the same colored pieces were in a row, column, or diagonal line. Once a win condition was found it called 
  the endGame() function and stopped the ability to drop any new pieces, and display a message of the winner.
  
  ```
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

#### Challenge 2 Fill a Spot
In figuring out how to show and place the players piece. I created a fillSpot function that was hooked to an
eventHandler so when a player clicked a spot in the top row it would drop to the bottom of the stack. I targeted 
the columns for the drop and knowing I had 7 total rows I started them at 1 and decremented them as the pieces fell 
to the bottom row. Assigning a spot variable to column, row allowed me to add the appropriate color to each players
turn. Then fillSpot checked for a win by the spots location and the color of that spot.
```
function fillSpot(e) {
  let column = e.target.classList[2];
  let row = 6 - columnTracker[column];
  if (row > 0) {
    columnTracker[column]++;
    let spot = document.getElementsByClassName(column)[row];
    player = player === 'red'? 'black' : 'red';
    spot.classList.add(player);
    checkForWin(spot, player);
  }
}

### HindSight 
Being the first game I've build made me realize hoe little at this point I really know.  I need to prepare and 
plan more efficiently and continue researching and working on growing my knowledge base in HTML CSS Javascript
and the DOM. This was a great learning experience and even through all the frustration and failure I am excited 
to continue learning and growing my coding skill set.

### Support
  * MDN
  * 3WSchool
  * Google
  * Mike

### Tools
  * Javascript
  * CSS
  * HTML
  
### Link to Connect 4
  * https://206tony.github.io/connect4/