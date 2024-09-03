import {Player} from "./player"

test("test player", () => {
    let player = new Player(true, 1);
    expect(player.board.placeShip(3,4,4)).toBe(true);
    player.board.receiveAttack(3,4);
    player.board.receiveAttack(3,5);
    player.board.receiveAttack(3,6);
    expect(player.board.receiveAttack(1,3)).toBe(false);
    expect(player.board.receiveAttack(3,7)).toBe("game over");
})