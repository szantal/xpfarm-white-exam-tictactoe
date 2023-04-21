const players = require('./ticTacToe').players;
const currentPlayer = require('./ticTacToe').currentPlayer;
const cells = require('./ticTacToe').cells;
const ticTacToe = require('./ticTacToe');

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
});