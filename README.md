# Tic Tac Toe repo

# Description 
The exercise involves developing a Tic-Tac-Toe game strictly adhering to the TDD rules.

Tic	Tac	Toe	- Game	Rules:	
https://en.wikipedia.org/wiki/Tic-tac-toe

Kata Objective:
The system should run in BOT mode (random BOT moves for player X & O) to print on the screen all the player's moves (with a 2 seconds timeout between each round) until someone won or the game ends with 
a draw.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog
### ✅ US 1 
As a Tic Tac Toe fan
I want to have players  
So that players can play the game

### ✅ UAT 1.1
Given a new game
When the game starts 
Then the number of players should be 2

### ✅ UAT 1.2
Given a new game
When the game starts 
Then the first player should be X

### ✅ US 2 
As a Tic Tac Toe fan
I want to have an empty game board 
So that players' moves can be followed there

### ✅ UAT 2.1
Given a game board
When I count the number of cells 
Then it should be 9

### ✅ UAT 2.2
Given the cells of the game board
When I want to create one
Then the empty game board appears

### ✅ UAT 2.3
Given a new game
When the game starts 
Then the empty game board is created

### ✅ US 3
As a Tic Tac Toe fan 
I want to see players' moves on the board 
So that I can follow the gameplay

### ✅ UAT 3.1
Given the empty game board
When player X moves
Then his movement appears on the game board

### ✅ UAT 3.2
Given the game board after player X moved
When player O moves
Then his movement appears on the game board

### ✅ US 4
As a Tic Tac Toe fan
I want to make sure players change turns
So that the players can make their own moves

### ✅ UAT 4.1
Given player X
When he finishes his turn
Then actual player changes to player O

### ✅ UAT 4.2
Given player O
When he finishes his turn
Then actual player changes to player X

### ✅ US 5
As a Tic Tac Toe fan
I want to know who won the game
So that I can celebrate him

### ✅ UAT 5.1
Given position ["X", " ", " ", "X", "O", " ", "X", " ", "O"]
When I look for the winner
Then it should be player X

### ✅ UAT 5.2
Given position ["X", " ", "X", "O", "O", "O", "X", " ", " "]
When I look for the winner
Then it should be player O

### ✅ UAT 5.3
Given position ["X", " ", " ", "O", "X", " ", "O", " ", "X"]
When I look for the winner
Then it should be player X

### ✅ UAT 5.4
Given position ["X", "O", "X", "O", "O", "X", "X", "X", "O"]
When I look for the winner
Then it should be draw

### ✅ UAT 5.5
Given position ["X", "X", "O", " ", " ", " ", "X", " ", "O"]
When I look for the winner
Then it should be no winner

### 🚧 US 6
As a Tic Tac Toe fan
I want to follow the game on the board
So that I can cheer the players

### ✅ UAT 6.1
Given position ["X", " ", " ", "X", "O", " ", "X", " ", "O"]
When I look at the board
Then it should be "\nPlayer X:\nX| | \n-+-+-\nX|O| \n-+-+-\nX| |O\n\nPLAYER X WON!"

### ✅ UAT 6.2
Given position ["X", " ", "X", "O", "O", "O", "X", " ", " "]
When I look at the board
Then it should be "\nPlayer O:\nX| |X\n-+-+-\nO|O|O\n-+-+-\nX| | \n\nPLAYER O WON!"

### ⚠ UAT 6.3
Given position ["X", "O", "X", "O", "O", "X", "X", "X", "O"]
When I look at the board
Then it should be "\nPlayer X:\nX|O|X\n-+-+-\nO|O|X\n-+-+-\nX|X|O\n\nGAME ENDS WITH A DRAW!"

### ⚠ UAT 6.4
Given position ["X", " ", " ", "O", " ", " ", "O", " ", "X"]
When I look at the board
Then it should be "\nPlayer O:\nX| | \n-+-+-\nO| | \n-+-+-\nO| |X\n"

### ⚠ US 7 
As a Tic Tac Toe fan
I want to see a BOT vs BOT game with 2 seconds timeout between rounds
So that I can learn new strategies

### ⚠ UAT 7.1
Given the BOT vs BOT game runs
When it ends
Then someone should win it or it ends with a draw