const players = require('./ticTacToe').players;
const currentPlayer = require('./ticTacToe').currentPlayer;
const ticTacToe = require('./ticTacToe');

describe('US 1 - Tic Tac Toe players:', () => {
  it('the number of players should be 2', () => {
    expect(players.length).toBe(2);
  });
  it('the first player should be X', () => {
    expect(currentPlayer).toBe("X");
  });
});
