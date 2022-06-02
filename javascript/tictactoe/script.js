/* Gameboard Module */
const gameboard = ((doc) => {
  let playerturn = 1;
  let win = 0;
  /* Use random letters to avoid false wins */
  let gameboard = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

  /* Get cells from the DOM */
  const cells = document.getElementsByClassName("cell");

  /* Get winner h3 from the DOM */
  const winner = document.getElementById("winner");

  /* Restart button */
  const restarBtn = document.getElementById("game--restart");
  /* Add event listener to restart the game */
  restarBtn.addEventListener("click", function () {
    win = 0;
    gameboard = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    winner.innerHTML = "MAKE YOUR MOVES!";
    [...cells].forEach(function (cell) {
      cell.innerHTML = "";
    });
  });

  const bindCells = () =>
    /* Add event listeners on click to those cells */
    {
      [...cells].forEach(function (cell) {
        cell.addEventListener("click", function () {
          /* Make move */
          if (cell.innerHTML === "" && !win) {
            if (playerturn) {
              cell.innerHTML = "X";
              gameboard[cell.dataset.index] = cell.innerHTML;
              playerturn--;
            } else {
              cell.innerHTML = "O";
              gameboard[cell.dataset.index] = cell.innerHTML;
              playerturn++;
            }
            checkwinners();
            if (win) winner.innerHTML = `The winner is ${win}!`;
          }
        });
      });
    };

  /* Check if theres any winners */
  const checkwinners = () => {
    /* Check x-axis */
    if (gameboard[0] == gameboard[1] && gameboard[1] == gameboard[2])
      win = gameboard[0];
    if (gameboard[3] == gameboard[4] && gameboard[4] == gameboard[5])
      win = gameboard[3];
    if (gameboard[6] == gameboard[7] && gameboard[7] == gameboard[8])
      win = gameboard[6];
    /* Check y-axis */
    if (gameboard[0] == gameboard[3] && gameboard[3] == gameboard[6]) 
      win = gameboard[0];
    if (gameboard[1] == gameboard[4] && gameboard[4] == gameboard[7])
      win = gameboard[1];
    if (gameboard[2] == gameboard[5] && gameboard[3] == gameboard[8])
      win = gameboard[2];
    /* Check diagonals */
    if (gameboard[0] == gameboard[4] && gameboard[4] == gameboard[8])
      win = gameboard[0];
    if (gameboard[2] == gameboard[4] && gameboard[4] == gameboard[6])
      win = gameboard[2];
    /* No win */
    return 0;
  };

  bindCells();

  return {};
})(document);
