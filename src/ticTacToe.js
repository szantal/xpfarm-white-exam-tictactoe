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

function makeMove(currentPlayer, cells, emptyCells, move = Math.floor(Math.random() * emptyCells.length)) {
  cells[emptyCells[move]] = currentPlayer;
  emptyCells.splice(move, 1);
  return cells;
}

function changePlayer(currentPlayer) {
  return currentPlayer === "X" && "O" || "X";
}

function whoWon(cells) {
  let winnerPositions = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];
  for (let position = 0; position < winnerPositions.length; position++) {
    if (cells[winnerPositions[position][0]] != " "
      && cells[winnerPositions[position][0]] === cells[winnerPositions[position][1]] 
      && cells[winnerPositions[position][0]] === cells[winnerPositions[position][2]])
      return cells[winnerPositions[position][0]];
    else if (cells.indexOf(" ") === -1)
      return "Draw!";
  }
  return "";
}

function showBoard(cells, winner, currentPlayer) {
	if (winner === "") 
  	return "\nPlayer " + currentPlayer + ":" + gameBoard(cells) + "\n";
  else if (winner === "Draw!")
  	return "\nPlayer " + currentPlayer + ":" + gameBoard(cells) + "\n\nGAME ENDS WITH A DRAW!";
  else if (winner === "X" || winner === "O")
  	return "\nPlayer " + currentPlayer + ":" + gameBoard(cells) + "\n\nPLAYER " + winner + " WON!";
}

function gamePlay() {
  let winner = "";
  emptyCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  cells = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  console.log(startGame());
  for (let step = 1; step <= 9 && winner === ""; step++) {
        sleep(2000);
        makeMove(currentPlayer, cells, emptyCells);
        winner = whoWon(cells);
        if (winner === "" && emptyCells.length > 0) {
        	console.log(showBoard(cells, winner, currentPlayer));
          currentPlayer = changePlayer(currentPlayer);
        }
        else if (winner === "" && emptyCells.length === 0) {
          winner = "Draw!";
          console.log(showBoard(cells, winner, currentPlayer));
          return winner;
        }
        else {
        	console.log(showBoard(cells, winner, currentPlayer));
        	return winner;
        }
    }
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } 
  while (currentDate - date < milliseconds);
}

module.exports.players = players;
module.exports.currentPlayer = currentPlayer;
module.exports.cells = cells;
module.exports.gameBoard = gameBoard;
module.exports.startGame = startGame;
module.exports.makeMove = makeMove;
module.exports.changePlayer = changePlayer;
module.exports.whoWon = whoWon;
module.exports.showBoard = showBoard;
module.exports.gamePlay = gamePlay;