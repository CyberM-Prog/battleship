import * as factories from "./factory-functions";
import * as userInterface from "./user-interface";
import "./index.css";

const player1 = factories.Player("John", false);

player1.gameboard.placeShip(player1.carrier, [0, 0], "x");
player1.gameboard.placeShip(player1.battleship, [0, 1], "x");
player1.gameboard.placeShip(player1.destroyer, [0, 2], "x");
player1.gameboard.placeShip(player1.submarine, [0, 3], "x");
player1.gameboard.placeShip(player1.patrolBoat, [0, 4], "x");

userInterface.renderGameboard(player1.gameboard.ships);

userInterface.renderGameboard(player1.gameboard.ships);
