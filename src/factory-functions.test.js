import * as factories from "./factory-functions"
const Ship = factories.Ship;
const Gameboard = factories.Gameboard;
const Player = factories.Player;

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

test("receiveAttack increases number of hits in a ship when the attack is a hit", () => {
    const testShip1 = Ship(5);
    const testShip2 = Ship(4);
    const testShip3 = Ship(3);
    const testShip4 = Ship(3);
    const testShip5 = Ship(2);

    const gameboard1 = Gameboard();

    gameboard1.placeShip(testShip1, [0, 0], "x");
    gameboard1.placeShip(testShip2, [0, 1], "x");
    gameboard1.placeShip(testShip3, [0, 2], "x");
    gameboard1.placeShip(testShip4, [0, 3], "x");
    gameboard1.placeShip(testShip5, [0, 4], "x");

    gameboard1.receiveAttack([2, 1]);

    expect(testShip2.numberOfHits).toBe(1);
    expect(gameboard1.shotsHit).toEqual([[2, 1]]);
});

test("receiveAttack increases number of missed shots when the attack is a miss", () => {
    const testShip1 = Ship(5);
    const testShip2 = Ship(4);
    const testShip3 = Ship(3);
    const testShip4 = Ship(3);
    const testShip5 = Ship(2);

    const gameboard1 = Gameboard();

    gameboard1.placeShip(testShip1, [0, 0], "x");
    gameboard1.placeShip(testShip2, [0, 1], "x");
    gameboard1.placeShip(testShip3, [0, 2], "x");
    gameboard1.placeShip(testShip4, [0, 3], "x");
    gameboard1.placeShip(testShip5, [0, 4], "x");

    gameboard1.receiveAttack([2, 5]);

    expect(gameboard1.shotsMissed).toEqual([[2, 5]]);
});

test("isEverythingSunk returns true when every ship is sunk", () => {
    const testShip1 = Ship(5);
    const testShip2 = Ship(4);
    const testShip3 = Ship(3);
    const testShip4 = Ship(3);
    const testShip5 = Ship(2);

    const gameboard1 = Gameboard();

    gameboard1.placeShip(testShip1, [0, 0], "x");
    gameboard1.placeShip(testShip2, [0, 1], "x");
    gameboard1.placeShip(testShip3, [0, 2], "x");
    gameboard1.placeShip(testShip4, [0, 3], "x");
    gameboard1.placeShip(testShip5, [0, 4], "x");

    gameboard1.receiveAttack([0, 0]);
    gameboard1.receiveAttack([1, 0]);
    gameboard1.receiveAttack([2, 0]);
    gameboard1.receiveAttack([3, 0]);
    gameboard1.receiveAttack([4, 0]);
    gameboard1.receiveAttack([0, 1]);
    gameboard1.receiveAttack([1, 1]);
    gameboard1.receiveAttack([2, 1]);
    gameboard1.receiveAttack([3, 1]);
    gameboard1.receiveAttack([0, 2]);
    gameboard1.receiveAttack([1, 2]);
    gameboard1.receiveAttack([2, 2]);
    gameboard1.receiveAttack([0, 3]);
    gameboard1.receiveAttack([1, 3]);
    gameboard1.receiveAttack([2, 3]);
    gameboard1.receiveAttack([0, 4]);
    gameboard1.receiveAttack([1, 4]);

    expect(gameboard1.isEverythingSunk()).toBe(true);
});

test("computerAttack returns a pair of random coordinates", () => {
    const player1 = Player("computer", true);

    expect(player1.computerAttack()[0]).toBeGreaterThanOrEqual(0);
    expect(player1.computerAttack()[1]).toBeGreaterThanOrEqual(0);
    expect(player1.computerAttack()[0]).toBeLessThanOrEqual(9);
    expect(player1.computerAttack()[1]).toBeLessThanOrEqual(9);
});
