/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

function Ship(length) {
    const numberOfHits = 0;

    function hit() {
        this.numberOfHits += 1;
    }

    function isSunk() {
        if (this.numberOfHits < this.length) return false;
        return true;
    }

    return { length, numberOfHits, hit, isSunk };
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
            if (index === -1) return (ship.coordinates = undefined);
            else board.splice(index, 1);
        });

        ships.push(ship);
    }

    function receiveAttack(coordinates) {
        ships.forEach((ship) =>
            ship.coordinates.forEach((shipCoordinates) => {
                if (shipCoordinates.toString() === coordinates.toString()) {
                    ship.numberOfHits++;
                    this.shotsHit.push(coordinates);
                    return;
                }
            })
        );

        this.shotsMissed.push(coordinates);
    }

    function isEverythingSunk() {
        let everythingSunk = true;
        ships.forEach((ship) => {
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

    if (isComputer) {
        const computerAttack = function () {
            const attackCoordinates = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
            ];

            return attackCoordinates;
        };
        return { name, gameboard, computerAttack };
    }

    return { name, gameboard };
}

module.exports = { Ship, Gameboard, Player };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUIsd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLGFBQWE7QUFDYjs7QUFFQSxtQkFBbUI7Ozs7Ozs7VUMvR25CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZIaXRzID0gMDtcblxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgKz0gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLm51bWJlck9mSGl0cyA8IHRoaXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7IGxlbmd0aCwgbnVtYmVyT2ZIaXRzLCBoaXQsIGlzU3VuayB9O1xufVxuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuXG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IHNob3RzSGl0ID0gW107XG5cbiAgICBjb25zdCBzaG90c01pc3NlZCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIHN0YXJ0Q29vcmRpbmF0ZSwgYXhpcykge1xuICAgICAgICBzaGlwLmNvb3JkaW5hdGVzID0gW3N0YXJ0Q29vcmRpbmF0ZV07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpXG4gICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlc1tpXSA9IFtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlc1tpIC0gMV1bMF0gKyAxLFxuICAgICAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzW2kgLSAxXVsxXSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgZWxzZSBpZiAoYXhpcyA9PT0gXCJ5XCIpXG4gICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlc1tpXSA9IFtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlc1tpIC0gMV1bMF0sXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXNbaSAtIDFdWzFdIC0gMSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBib2FyZC5maW5kSW5kZXgoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC50b1N0cmluZygpID09PSBjb29yZGluYXRlcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gKHNoaXAuY29vcmRpbmF0ZXMgPSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgZWxzZSBib2FyZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT5cbiAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBDb29yZGluYXRlcy50b1N0cmluZygpID09PSBjb29yZGluYXRlcy50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAubnVtYmVyT2ZIaXRzKys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdHNIaXQucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2hvdHNNaXNzZWQucHVzaChjb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNFdmVyeXRoaW5nU3VuaygpIHtcbiAgICAgICAgbGV0IGV2ZXJ5dGhpbmdTdW5rID0gdHJ1ZTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkgIT09IHRydWUpIGV2ZXJ5dGhpbmdTdW5rID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZXZlcnl0aGluZ1N1bms7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBpc0V2ZXJ5dGhpbmdTdW5rLFxuICAgICAgICBzaG90c0hpdCxcbiAgICAgICAgc2hvdHNNaXNzZWQsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IDEwOyBuKyspIHtcbiAgICAgICAgICAgIGJvYXJkLnB1c2goW2ksIG5dKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIFBsYXllcihuYW1lLCBpc0NvbXB1dGVyKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBpZiAoaXNDb21wdXRlcikge1xuICAgICAgICBjb25zdCBjb21wdXRlckF0dGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dGFja0Nvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRpbmF0ZXM7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGdhbWVib2FyZCwgY29tcHV0ZXJBdHRhY2sgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBuYW1lLCBnYW1lYm9hcmQgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=