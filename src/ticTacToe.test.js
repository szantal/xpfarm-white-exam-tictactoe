const players = require('./ticTacToe').players;
const currentPlayer = require('./ticTacToe').currentPlayer;
const cells = require('./ticTacToe').cells;
const gameBoard = require('./ticTacToe').gameBoard;
const startGame = require('./ticTacToe').startGame;
const makeMove = require('./ticTacToe').makeMove;
const changePlayer = require('./ticTacToe').changePlayer;

describe('US 1 - Tic Tac Toe players:', () => {
  it('the number of players should be 2', () => {
    expect(players.length).toBe(2);
  });
  it('the first player should be X', () => {
    expect(currentPlayer).toBe("X");
  });
});
describe('US 2 - Tic Tac Toe game board:', () => {
  it('the number of cells of the game board should be 9', () => {
    expect(cells.length).toBe(9);
  });
  it('an empty game board should appear as "\n | | \n-+-+-\n | | \n-+-+-\n | | "', () => {
    expect(gameBoard(cells)).toBe("\n | | \n-+-+-\n | | \n-+-+-\n | | ");
  });
  it('an empty game board should be created when game starts: "Game Board Creation...\n | | \n-+-+-\n | | \n-+-+-\n | | \n\nBoard Created.\nThe game will start with player X"', () => {
    expect(startGame()).toBe("Game Board Creation...\n | | \n-+-+-\n | | \n-+-+-\n | | \n\nBoard Created.\nThe game will start with player X");
  });  
});
describe('US 3 - Tic Tac Toe player move:', () => {
  it('when player X moves to position 0, it should return board ["X", " ", " ", " ", " ", " ", " ", " ", " "]', () => {
    expect(makeMove("X", [" ", " ", " ", " ", " ", " ", " ", " ", " "], [0, 1, 2, 3, 4, 5, 6, 7, 8], 0)).toStrictEqual(["X", " ", " ", " ", " ", " ", " ", " ", " "]);
  });
  it('when player O moves to position 8, it should return board ["X", " ", " ", " ", " ", " ", " ", " ", "O"]', () => {
    expect(makeMove("O", ["X", " ", " ", " ", " ", " ", " ", " ", " "], [1, 2, 3, 4, 5, 6, 7, 8], 7)).toStrictEqual(["X", " ", " ", " ", " ", " ", " ", " ", "O"]);
  });
});
describe('US 4 - Tic Tac Toe player change:', () => {
  it('after player X turn the current player should be player O', () => {
    expect(changePlayer("X")).toBe("O");
  });
});