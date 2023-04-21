let players = ["X", "O"];
let currentPlayer = "X";
let cells = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let emptyCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function gameBoard(cells) {
  let line = "\n-+-+-\n";
  let board = "\n" + cells[0] + "|" + cells[1] + "|" + cells[2] + line + cells[3] + "|" + cells[4] + "|" + cells[5] + line + cells[6] + "|" + cells[7] + "|" + cells[8];
  return board;
}

function startGame() {
  return "Game Board Creation..." + gameBoard(cells) + "\n\nBoard Created.\nThe game will start with player X";
}

function makeMove(currentPlayer, cells, emptyCells, move) {
  cells[emptyCells[move]] = currentPlayer;
  emptyCells.splice(move, 1);
  return cells;
}

module.exports.players = players;
module.exports.currentPlayer = currentPlayer;
module.exports.cells = cells;
module.exports.gameBoard = gameBoard;
module.exports.startGame = startGame;
module.exports.makeMove = makeMove;