const container = document.getElementById("container");

const main = document.createElement("div");
main.classList.add("main");
container.appendChild(main);

function renderGameboard(ships) {
    const board = document.createElement("div");
    board.classList.add("board");
    main.appendChild(board);

    for (let i = 9; i >= 0; i--) {
        for (let n = 0; n < 10; n++) {
            const square = document.createElement("div");
            square.classList.add(`${n},${i}`, "square");

            ships.forEach((ship) => {
                ship.coordinates.forEach((coordinate) => {
                    if (coordinate.toString() === `${n},${i}`)
                        square.classList.add("ship");
                });
            });

            board.appendChild(square);
        }
    }
}

export { renderGameboard };
