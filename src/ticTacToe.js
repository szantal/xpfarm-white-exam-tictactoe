let players = ["X", "O"];
let currentPlayer = "X";
let cells = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

function gameBoard(cells) {
  let board = "\n" + cells[0] + "|" + cells[1] + "|" + cells[2] + "\n-+-+-\n" + cells[3] + "|" + cells[4] + "|" + cells[5] + "\n-+-+-\n" + cells[6] + "|" + cells[7] + "|" + cells[8];
  return board;
}

module.exports.players = players;
module.exports.currentPlayer = currentPlayer;
module.exports.cells = cells;
module.exports.gameBoard = gameBoard;