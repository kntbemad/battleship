import {Ship} from "./battleship"

test("Ship hit", () => {
    let ship = new Ship(3);
    ship.hit();
    expect(ship.state).toBe("alive");
})

test("Ship hit all", () => {
    let ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.state).toBe("sunk");
})

test("Ship is not sunk", () => {
    let ship = new Ship(5);
    ship.hit();
    expect(ship.shipSunk()).toBe(false);
})


test("Ship is sunk", () => {
    let ship = new Ship(5);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.shipSunk()).toBe(true);
})
