const logic = require("./index");
const Ship = logic.Ship;
const Gameboard = logic.Gameboard;

test("Ship factory return the correct object", () =>
    expect(Ship(4)).toMatchObject({
        length: 4,
        numberOfHits: 0,
    }));

test("hit function works", () => {
    const testShip = Ship(4);
    testShip.hit();
    expect(testShip.numberOfHits).toBe(1);
});

test("isSunk function works", () => {
    const testShip = Ship(4);
    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
});

test("isSunk function returns false", () => {
    const testShip = Ship(4);
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
});

test("placeShip sets the coordinates of a ship", () => {
    const testShip = Ship(4);
    const testShip2 = Ship(4);

    const gameboard1 = Gameboard();

    gameboard1.placeShip(testShip, [0, 0], "x");
    gameboard1.placeShip(testShip2, [9, 9], "y");

    expect(testShip.coordinates).toEqual([
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
    ]);

    expect(testShip2.coordinates).toEqual([
        [9, 9],
        [9, 8],
        [9, 7],
        [9, 6],
    ]);
});

test("placeShip doesn't let to put a ship where there's another one or outside the board", () => {
    const testShip = Ship(4);

    const gameboard1 = Gameboard();
    gameboard1.placeShip(testShip, [0, 0], "x");

    const testShip2 = Ship(3);
    gameboard1.placeShip(testShip2, [0, 0], "x");

    expect(testShip2.coordinates).toBeUndefined();
});
