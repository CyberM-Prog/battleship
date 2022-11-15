import * as factories from "./factory-functions";
import * as userInterface from "./user-interface";
import "./index.css";

const player1 = factories.Player("Player", false);

const player2 = factories.Player("PC", true, player1);

userInterface.placeShipScreen(player1.patrolBoat, player1);
userInterface.placeShipScreen(player1.submarine, player1);
userInterface.placeShipScreen(player1.destroyer, player1);
userInterface.placeShipScreen(player1.battleship, player1);
userInterface.placeShipScreen(player1.carrier, player1);

player2.gameboard.placeComputerShip(player2.carrier);
player2.gameboard.placeComputerShip(player2.battleship);
player2.gameboard.placeComputerShip(player2.destroyer);
player2.gameboard.placeComputerShip(player2.submarine);
player2.gameboard.placeComputerShip(player2.patrolBoat);

userInterface.renderGameboard(player1);

userInterface.renderGameboard(player2);

const squares = document.querySelectorAll(".square");

squares.forEach((square) =>
    square.addEventListener(
        "click",
        function () {
            userInterface.renderSunkShips(player2.gameboard.ships, 1);
            if (
                player1.gameboard.isEverythingSunk() ||
                player2.gameboard.isEverythingSunk()
            ) {
                squares.forEach((square) => square.classList.add("disabled"));
                if (player1.gameboard.isEverythingSunk())
                    userInterface.gameOverScreen("computer");
                else if (player2.gameboard.isEverythingSunk())
                    userInterface.gameOverScreen("player");
                return;
            }
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
                userInterface.renderSunkShips(player1.gameboard.ships, 0);
            }
            if (
                player1.gameboard.isEverythingSunk() ||
                player2.gameboard.isEverythingSunk()
            ) {
                squares.forEach((square) => square.classList.add("disabled"));
                if (player1.gameboard.isEverythingSunk())
                    userInterface.gameOverScreen("computer");
                else if (player2.gameboard.isEverythingSunk())
                    userInterface.gameOverScreen("player");
                return;
            }
        },
        { once: true }
    )
);
