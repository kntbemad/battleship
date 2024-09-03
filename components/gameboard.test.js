import { Ship } from './battleship.js' 
import { Gameboard } from "./gameboard.js"
console.log("hello")

test("create gameboard", () => {
    let board = new Gameboard();
})

test("place ship", () => {
    let board = new Gameboard();
    board.placeShip(1,2,3);
    expect(board.board[1][2]).toEqual([new Ship(3),false])
    expect(board.placeShip(1,2,3)).toEqual(false);
})

test("recieve hit", () => {
    let board = new Gameboard();
    board.placeShip(1,2,3);
    expect(board.receiveAttack(1,2)).toBe(true);
})

test("recieve hit miss", () => {
    let board = new Gameboard();
    board.placeShip(1,2,3);
    expect(board.receiveAttack(1,5)).toBe(false);
})

test("hit same place", () => {
    let board = new Gameboard();
    board.placeShip(1,2,3);
    board.receiveAttack(1,2);
    expect(board.receiveAttack(1,2)).toBe(null);
})


test("win game", () => {
    let board = new Gameboard();
    board.placeShip(1,2,3);
    board.receiveAttack(1,2);
    board.receiveAttack(1,3);
    expect(board.receiveAttack(1,4)).toBe("game over");
    expect(board.gameOver).toBe(true);
})