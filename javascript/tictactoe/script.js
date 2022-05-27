/* Player factory function */
/* const Player = (user, symbol) => {
  return { user, symbol };
};
 */
/* Gameboard Module */
const gameboard = ((doc) => {
  let playerturn = 1;
  let win = 0;
  /* Use random letters to avoid false wins */
  let gameboard = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  /* Get cells from the DOM */
  const cells = document.getElementsByClassName("cell");

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
            if (win) console.log("win");
          }
        });
      });
    };

  bindCells();
  /* Check if theres any winners */
  const checkwinners = () => {
    /* Check x-axis */
    if (gameboard[0] == gameboard[1] && gameboard[1] == gameboard[2]) win = 1;
    if (gameboard[3] == gameboard[4] && gameboard[4] == gameboard[5]) win = 1;
    if (gameboard[6] == gameboard[7] && gameboard[7] == gameboard[8]) win = 1;
    /* Check y-axis */
    if (gameboard[0] == gameboard[3] && gameboard[3] == gameboard[6]) win = 1;
    if (gameboard[1] == gameboard[4] && gameboard[4] == gameboard[7]) win = 1;
    if (gameboard[2] == gameboard[5] && gameboard[3] == gameboard[8]) win = 1;
    /* Check diagonals */
    if (gameboard[0] == gameboard[4] && gameboard[4] == gameboard[8]) win = 1;
    if (gameboard[2] == gameboard[4] && gameboard[4] == gameboard[6]) win = 1;
    /* No win */
    return 0;
  };

  return {};
})(document);
