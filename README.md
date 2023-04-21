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

### ⚠ US 4
As a Tic Tac Toe fan
I want to make sure players change turns
So that the players can make their own moves

### ⚠ UAT 4.1
Given player X
When he finishes his turn
Then actual player changes to player O

### ⚠ UAT 4.2
Given player O
When he finishes his turn
Then actual player changes to player X