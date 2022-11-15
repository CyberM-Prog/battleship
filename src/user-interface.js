const container = document.getElementById("container");

const main = document.createElement("div");
main.classList.add("main");
container.appendChild(main);

function renderGameboard(player, div = main) {
    const board = document.createElement("div");
    board.classList.add("board");
    div.appendChild(board);

    for (let i = 9; i >= 0; i--) {
        for (let n = 0; n < 10; n++) {
            const square = document.createElement("div");
            square.classList.add(`${n},${i}`, "square");

            if (player) {
                player.gameboard.ships.forEach((ship) => {
                    ship.coordinates.forEach((coordinate) => {
                        if (coordinate.toString() === `${n},${i}`) {
                            if (!player.isComputer)
                                square.classList.add("ship");
                            else
                                square.addEventListener("click", function () {
                                    square.classList.remove("missed");
                                    square.classList.add("hit");
                                });
                        } else if (player.isComputer) {
                            square.addEventListener("click", function () {
                                if (!square.classList.contains("hit"))
                                    square.classList.add("missed");
                            });
                        }
                    });
                });
            }

            if (player.isComputer) {
                square.addEventListener("click", function () {
                    player.gameboard.receiveAttack([n, i]);
                });
            }

            board.appendChild(square);
        }
    }
}

function addClass(coordinates, hitOrMissed) {
    const square = document.getElementsByClassName(coordinates.toString())[0];
    square.classList.add(hitOrMissed);
}

function renderSunkShips(ships, gameboardIndex) {
    ships.forEach((ship) =>
        ship.coordinates.forEach((coordinates) => {
            if (ship.isSunk()) {
                const square = document.getElementsByClassName(
                    coordinates.toString()
                )[gameboardIndex];
                square.classList.add("sunkship");
            }
        })
    );
}

function gameOverScreen(winner) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    container.appendChild(overlay);

    const screen = document.createElement("div");
    screen.classList.add("over");
    overlay.appendChild(screen);

    const wonOrLost = document.createElement("div");
    wonOrLost.classList.add("wonlost");

    const message = document.createElement("div");
    message.classList.add("message");

    const tryAgainBtn = document.createElement("button");
    tryAgainBtn.classList.add("button");
    tryAgainBtn.textContent = "Play Again";
    tryAgainBtn.addEventListener("click", function () {
        window.location.reload();
    });

    if (winner === "player") {
        wonOrLost.textContent = "You won!";
        message.textContent = "Congratulations";
        tryAgainBtn.classList.add("won");
    } else if (winner === "computer") {
        wonOrLost.textContent = "You lost!";
        message.textContent = "Better luck next time";
        tryAgainBtn.classList.add("lost");
    }

    screen.appendChild(wonOrLost);
    screen.appendChild(message);
    screen.appendChild(tryAgainBtn);
}

let axis = "x";

let gameboardIndex = 5;

function placeShipScreen(ship, player) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    if (!document.querySelector(".overlay"))
        overlay.classList.add("darkenedbg");
    container.appendChild(overlay);

    const screen = document.createElement("div");
    screen.classList.add("placements");
    overlay.appendChild(screen);

    const title = document.createElement("div");
    title.classList.add("placementtext");
    title.textContent = `Place your ${ship.name}`;
    screen.appendChild(title);

    const changeAxisButton = document.createElement("button");
    changeAxisButton.classList.add("axisbtn");
    if (axis === "x") changeAxisButton.textContent = `Change to vertical`;
    if (axis === "y") changeAxisButton.textContent = `Change to horizontal`;
    screen.appendChild(changeAxisButton);

    changeAxisButton.addEventListener("click", () => {
        if (axis === "x") {
            axis = "y";
            changeAxisButton.textContent = `Change to horizontal`;
            overlay.remove();
            placeShipScreen(ship, player);
            updateGameboardRender(player, gameboardIndex + 1);
        } else if (axis === "y") {
            axis = "x";
            changeAxisButton.textContent = `Change to vertical`;
            overlay.remove();
            placeShipScreen(ship, player);
            updateGameboardRender(player, gameboardIndex + 1);
        }
    });

    renderGameboard("", screen);

    const squares = screen.querySelectorAll(".square");
    squares.forEach((square, index) => {
        if (axis === "x") {
            square.addEventListener("mouseenter", function () {
                if (axis === "y") {
                    overlay.remove();
                    placeShipScreen(ship, player);
                    updateGameboardRender(player, gameboardIndex + 1);
                }
            });
            if (squares[index + ship.length - 1]) {
                if (
                    square.className.charAt(2) ===
                    squares[index + ship.length - 1].className.charAt(2)
                ) {
                    square.addEventListener("mouseenter", function () {
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
                        if (result === true) {
                            for (let i = 0; i < ship.length; i++) {
                                squares[index + i].style.backgroundColor =
                                    "#3e92cc";
                            }
                        } else {
                            for (let i = 0; i < ship.length; i++) {
                                if (!squares[index + i].classList[2]) {
                                    squares[index + i].style.backgroundColor =
                                        "rgb(70, 70, 70)";
                                }
                            }
                        }
                    });
                    square.addEventListener("mouseout", function () {
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
                        if (result === true) {
                            for (let i = 0; i < ship.length; i++) {
                                squares[index + i].style.backgroundColor =
                                    "#b4d2e7";
                            }
                        } else {
                            for (let i = 0; i < ship.length; i++) {
                                if (!squares[index + i].classList[2]) {
                                    squares[index + i].style.backgroundColor =
                                        "#b4d2e7";
                                }
                            }
                        }
                    });
                    square.addEventListener("click", function () {
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
                        if (result === true) {
                            player.gameboard.placeShip(
                                ship,
                                [
                                    +square.classList[0].charAt(0),
                                    +square.classList[0].charAt(2),
                                ],
                                "x"
                            );
                            updateGameboardRender(player);
                            if (gameboardIndex > 1) {
                                updateGameboardRender(player, gameboardIndex);
                                gameboardIndex--;
                            }
                            overlay.remove();
                        }
                    });
                } else {
                    square.addEventListener("mouseenter", function () {
                        for (
                            let i = 0;
                            square.className.charAt(2) ===
                            squares[index + i].className.charAt(2);
                            i++
                        ) {
                            if (!squares[index + i].classList[2])
                                squares[index + i].style.backgroundColor =
                                    "rgb(70, 70, 70)";
                        }
                    });
                    square.addEventListener("mouseout", function () {
                        for (
                            let i = 0;
                            square.className.charAt(2) ===
                            squares[index + i].className.charAt(2);
                            i++
                        ) {
                            if (!squares[index + i].classList[2])
                                squares[index + i].style.backgroundColor =
                                    "#b4d2e7";
                        }
                    });
                }
            } else {
                square.addEventListener("mouseenter", function () {
                    for (let i = 0; squares[index + i]; i++) {
                        if (!squares[index + i].classList[2])
                            squares[index + i].style.backgroundColor =
                                "rgb(70, 70, 70)";
                    }
                });
                square.addEventListener("mouseout", function () {
                    for (let i = 0; squares[index + i]; i++) {
                        if (!squares[index + i].classList[2])
                            squares[index + i].style.backgroundColor =
                                "#b4d2e7";
                    }
                });
            }
        }
        if (axis === "y") {
            if (squares[index + 10 * (ship.length - 1)]) {
                if (
                    square.className.charAt(0) ===
                    squares[index + 10 * (ship.length - 1)].className.charAt(0)
                ) {
                    square.addEventListener("mouseenter", function () {
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i * 10
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
                        if (result === true) {
                            for (let i = 0; i < ship.length; i++) {
                                squares[index + i * 10].style.backgroundColor =
                                    "#3e92cc";
                            }
                        } else {
                            for (let i = 0; i < ship.length; i++) {
                                if (!squares[index + i * 10].classList[2]) {
                                    squares[
                                        index + i * 10
                                    ].style.backgroundColor = "rgb(70, 70, 70)";
                                }
                            }
                        }
                    });
                    square.addEventListener("mouseout", function () {
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i * 10
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
                        if (result === true) {
                            for (let i = 0; i < ship.length; i++) {
                                squares[index + i * 10].style.backgroundColor =
                                    "#b4d2e7";
                            }
                        } else {
                            for (let i = 0; i < ship.length; i++) {
                                if (!squares[index + i * 10].classList[2]) {
                                    squares[
                                        index + i * 10
                                    ].style.backgroundColor = "#b4d2e7";
                                }
                            }
                        }
                    });
                    square.addEventListener("click", function () {
                        let result = true;
                        player.gameboard.ships.forEach((element) => {
                            element.coordinates.forEach((coordinate) => {
                                for (let i = 0; i < ship.length; i++) {
                                    if (
                                        coordinate.toString() ===
                                        squares[
                                            index + i * 10
                                        ].classList[0].toString()
                                    )
                                        result = false;
                                }
                            });
                        });
                        if (result === true) {
                            player.gameboard.placeShip(
                                ship,
                                [
                                    +square.classList[0].charAt(0),
                                    +square.classList[0].charAt(2),
                                ],
                                "y"
                            );
                            updateGameboardRender(player);
                            if (gameboardIndex > 1) {
                                updateGameboardRender(player, gameboardIndex);
                                gameboardIndex--;
                            }
                            overlay.remove();
                        }
                    });
                } else {
                    square.addEventListener("mouseenter", function () {
                        for (
                            let i = 0;
                            square.className.charAt(0) ===
                            squares[index + i * 10].className.charAt(0);
                            i++
                        ) {
                            squares[index + i * 10].style.backgroundColor =
                                "rgb(70, 70, 70)";
                        }
                    });
                    square.addEventListener("mouseout", function () {
                        for (
                            let i = 0;
                            square.className.charAt(0) ===
                            squares[index + i * 10].className.charAt(0);
                            i++
                        ) {
                            squares[index + i * 10].style.backgroundColor =
                                "#b4d2e7";
                        }
                    });
                }
            } else {
                square.addEventListener("mouseenter", function () {
                    for (let i = 0; squares[index + i * 10]; i++) {
                        if (!squares[index + i * 10].classList[2])
                            squares[index + i * 10].style.backgroundColor =
                                "rgb(70, 70, 70)";
                    }
                });
                square.addEventListener("mouseout", function () {
                    for (let i = 0; squares[index + i * 10]; i++) {
                        if (!squares[index + i * 10].classList[2])
                            squares[index + i * 10].style.backgroundColor =
                                "#b4d2e7";
                    }
                });
            }
        }
    });
}

function updateGameboardRender(player, gameboardIndex = 0) {
    for (let i = 9; i >= 0; i--) {
        for (let n = 0; n < 10; n++) {
            const square = document.getElementsByClassName(`${n},${i}`)[
                gameboardIndex
            ];

            if (player) {
                player.gameboard.ships.forEach((ship) => {
                    ship.coordinates.forEach((coordinate) => {
                        if (coordinate.toString() === `${n},${i}`) {
                            if (!player.isComputer)
                                square.classList.add("ship");
                            else
                                square.addEventListener("click", function () {
                                    square.classList.remove("missed");
                                    square.classList.add("hit");
                                });
                        } else if (player.isComputer) {
                            square.addEventListener("click", function () {
                                if (!square.classList.contains("hit"))
                                    square.classList.add("missed");
                            });
                        }
                    });
                });
            }

            if (player.isComputer) {
                square.addEventListener("click", function () {
                    player.gameboard.receiveAttack([n, i]);
                });
            }
        }
    }
}

export {
    renderGameboard,
    addClass,
    gameOverScreen,
    placeShipScreen,
    renderSunkShips,
};
