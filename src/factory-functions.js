function Ship(length, name) {
    const numberOfHits = 0;

    function hit() {
        this.numberOfHits += 1;
    }

    function isSunk() {
        if (this.numberOfHits < this.length) return false;
        return true;
    }

    return { length, numberOfHits, hit, isSunk, name };
}

function Gameboard() {
    const board = createBoard();

    const ships = [];

    const shotsHit = [];

    const shotsMissed = [];

    function placeShip(ship, startCoordinate, axis) {
        ship.coordinates = [startCoordinate];

        for (let i = 1; i < ship.length; i++) {
            if (axis === "x")
                ship.coordinates[i] = [
                    ship.coordinates[i - 1][0] + 1,
                    ship.coordinates[i - 1][1],
                ];
            else if (axis === "y")
                ship.coordinates[i] = [
                    ship.coordinates[i - 1][0],
                    ship.coordinates[i - 1][1] - 1,
                ];
        }

        ship.coordinates.forEach((coordinates) => {
            const index = board.findIndex((element) => {
                return element.toString() === coordinates.toString();
            });
            if (index === -1) return (ship.coordinates = null);
            else board.splice(index, 1);
        });

        if (ship.coordinates === null) return null;

        this.ships.push(ship);
    }

    function placeComputerShip(ship) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        let axis;
        if (randomNumber <= 5) axis = "x";
        if (randomNumber >= 6) axis = "y";

        let startCoordinate;

        if (axis === "x") {
            startCoordinate = [
                Math.floor(Math.random() * 9),
                Math.floor(Math.random() * 10),
            ];
        } else if (axis === "y") {
            startCoordinate = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 9) + 1,
            ];
        }

        const coordinates = this.placeShip(ship, startCoordinate, axis);
        if (coordinates === null) this.placeComputerShip(ship);
    }

    let attacksReceived = 0;

    function receiveAttack(coordinates) {
        let result;
        this.ships.forEach((ship) =>
            ship.coordinates.forEach((shipCoordinates) => {
                if (shipCoordinates.toString() === coordinates.toString()) {
                    ship.numberOfHits++;
                    this.shotsHit.push(coordinates);
                    this.attacksReceived++;
                    result = "hit";
                }
            })
        );

        if (result === "hit") return result;

        this.shotsMissed.push(coordinates);

        this.attacksReceived++;

        result = "missed";

        return result;
    }

    function isEverythingSunk() {
        let everythingSunk = true;
        this.ships.forEach((ship) => {
            if (ship.isSunk() !== true) everythingSunk = false;
        });
        return everythingSunk;
    }

    return {
        placeShip,
        receiveAttack,
        isEverythingSunk,
        shotsHit,
        shotsMissed,
        ships,
        attacksReceived,
        placeComputerShip,
    };
}

function createBoard() {
    const board = [];

    for (let i = 0; i < 10; i++) {
        for (let n = 0; n < 10; n++) {
            board.push([i, n]);
        }
    }
    return board;
}

function Player(name, isComputer) {
    const gameboard = Gameboard();

    const carrier = Ship(5, "Carrier");
    const battleship = Ship(4, "Battleship");
    const destroyer = Ship(3, "Destroyer");
    const submarine = Ship(3, "Submarine");
    const patrolBoat = Ship(2, "Patrol Boat");

    if (isComputer) {
        const computerAttacks = [];

        const computerAttack = function () {
            let attackCoordinates = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
            ];

            if (computerAttacks.includes(attackCoordinates.toString()))
                attackCoordinates = computerAttack();

            computerAttacks.push(attackCoordinates.toString());

            return attackCoordinates;
        };
        return {
            name,
            gameboard,
            computerAttack,
            carrier,
            battleship,
            destroyer,
            submarine,
            patrolBoat,
            isComputer,
        };
    }

    return {
        name,
        gameboard,
        carrier,
        battleship,
        destroyer,
        submarine,
        patrolBoat,
        isComputer,
    };
}

export { Ship, Gameboard, Player };
