const logic = require("./index");
const Ship = logic.Ship;

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
