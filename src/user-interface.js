const container = document.getElementById("container");

const main = document.createElement("div");
main.classList.add("main");
container.appendChild(main);

function renderGameboard(player) {
    const board = document.createElement("div");
    board.classList.add("board");
    main.appendChild(board);

    for (let i = 9; i >= 0; i--) {
        for (let n = 0; n < 10; n++) {
            const square = document.createElement("div");
            square.classList.add(`${n},${i}`, "square");

            player.gameboard.ships.forEach((ship) => {
                ship.coordinates.forEach((coordinate) => {
                    if (coordinate.toString() === `${n},${i}`) {
                        if (!player.isComputer) square.classList.add("ship");
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

export { renderGameboard, addClass, gameOverScreen };
