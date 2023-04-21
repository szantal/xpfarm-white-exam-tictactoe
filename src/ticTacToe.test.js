const players = require('./ticTacToe').players;
const currentPlayer = require('./ticTacToe').currentPlayer;
const cells = require('./ticTacToe').cells;
const gameBoard = require('./ticTacToe').gameBoard;
const startGame = require('./ticTacToe').startGame;
const makeMove = require('./ticTacToe').makeMove;
const changePlayer = require('./ticTacToe').changePlayer;
const whoWon = require('./ticTacToe').whoWon;
const showBoard = require('./ticTacToe').showBoard;

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
  it('after player O turn the current player should be player X', () => {
    expect(changePlayer("O")).toBe("X");
  });
});
describe('US 5 - Tic Tac Toe winner', () => {
  it('should be player X in position ["X", " ", " ", "X", "O", " ", "X", " ", "O"]', () => {
    expect(whoWon(["X", " ", " ", "X", "O", " ", "X", " ", "O"])).toBe("X");
  });
  it('should be player O in position ["X", " ", "X", "O", "O", "O", "X", " ", " "]', () => {
    expect(whoWon(["X", " ", "X", "O", "O", "O", "X", " ", " "])).toBe("O");
  });
  it('should be player X in position ["X", " ", " ", "O", "X", " ", "O", " ", "X"]', () => {
    expect(whoWon(["X", " ", " ", "O", "X", " ", "O", " ", "X"])).toBe("X");
  });
  it('should be draw in position ["X", "O", "X", "O", "O", "X", "X", "X", "O"]', () => {
    expect(whoWon(["X", "O", "X", "O", "O", "X", "X", "X", "O"])).toBe("Draw!");
  });
  it('should be no winner in position ["X", "X", "O", " ", " ", " ", "X", " ", "O"]', () => {
    expect(whoWon(["X", "X", "O", " ", " ", " ", "X", " ", "O"])).toBe("");
  });
});
describe('US 6 - Tic Tac Toe game board during the game:', () => {
  it('position ["X", " ", " ", "X", "O", " ", "X", " ", "O"] should be "\nPlayer X:\nX| | \n-+-+-\nX|O| \n-+-+-\nX| |O\n\nPLAYER X WON!"', () => {
    expect(showBoard(["X", " ", " ", "X", "O", " ", "X", " ", "O"], "X", "X")).toBe("\nPlayer X:\nX| | \n-+-+-\nX|O| \n-+-+-\nX| |O\n\nPLAYER X WON!");
  });
  it('position ["X", " ", "X", "O", "O", "O", "X", " ", " "] should be "\nPlayer O:\nX| |X\n-+-+-\nO|O|O\n-+-+-\nX| | \n\nPLAYER O WON!"', () => {
    expect(showBoard(["X", " ", "X", "O", "O", "O", "X", " ", " "], "O", "O")).toBe("\nPlayer O:\nX| |X\n-+-+-\nO|O|O\n-+-+-\nX| | \n\nPLAYER O WON!");
  });
  it('position ["X", "O", "X", "O", "O", "X", "X", "X", "O"] should be "\nPlayer X:\nX|O|X\n-+-+-\nO|O|X\n-+-+-\nX|X|O\n\nGAME ENDS WITH A DRAW!"', () => {
    expect(showBoard(["X", "O", "X", "O", "O", "X", "X", "X", "O"], "Draw!", "X")).toBe("\nPlayer X:\nX|O|X\n-+-+-\nO|O|X\n-+-+-\nX|X|O\n\nGAME ENDS WITH A DRAW!");
  });
  it('position ["X", " ", " ", "O", " ", " ", "O", " ", "X"] should be "\nPlayer O:\nX| | \n-+-+-\nO| | \n-+-+-\nO| |X\n"', () => {
    expect(showBoard(["X", " ", " ", "O", " ", " ", "O", " ", "X"], "", "O")).toBe("\nPlayer O:\nX| | \n-+-+-\nO| | \n-+-+-\nO| |X\n");
  });
});