import * as factories from "./factory-functions";
import * as userInterface from "./user-interface";
import "./index.css";

const player1 = factories.Player("John", false);

const player2 = factories.Player("PC", true);

player1.gameboard.placeShip(player1.carrier, [0, 0], "x");
player1.gameboard.placeShip(player1.battleship, [0, 1], "x");
player1.gameboard.placeShip(player1.destroyer, [0, 2], "x");
player1.gameboard.placeShip(player1.submarine, [0, 3], "x");
player1.gameboard.placeShip(player1.patrolBoat, [0, 4], "x");

player2.gameboard.placeShip(player2.carrier, [0, 0], "x");
player2.gameboard.placeShip(player2.battleship, [0, 1], "x");
player2.gameboard.placeShip(player2.destroyer, [0, 2], "x");
player2.gameboard.placeShip(player2.submarine, [0, 3], "x");
player2.gameboard.placeShip(player2.patrolBoat, [0, 4], "x");

userInterface.renderGameboard(player1);

userInterface.renderGameboard(player2);

const squares = document.querySelectorAll(".square");

squares.forEach((square) =>
    square.addEventListener(
        "click",
        function () {
            if (
                player2.gameboard.attacksReceived >
                player1.gameboard.attacksReceived
            ) {
                const computerAttackCoordinates = player2.computerAttack();
                const attackReceived = player1.gameboard.receiveAttack(
                    computerAttackCoordinates
                );
                userInterface.addClass(
                    computerAttackCoordinates,
                    attackReceived
                );
            }
            if (
                player1.gameboard.isEverythingSunk() ||
                player2.gameboard.isEverythingSunk()
            ) {
                squares.forEach((square) => square.classList.add("disabled"));
                userInterface.gameOverScreen();
                return;
            }
        },
        { once: true }
    )
);
