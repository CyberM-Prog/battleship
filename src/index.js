function Ship(length) {
    const numberOfHits = 0;

    function hit() {
        this.numberOfHits += 1;
    }

    function isSunk() {
        if (this.numberOfHits >= 4) return true;
        return false;
    }

    return { length, numberOfHits, hit, isSunk };
}

module.exports = { Ship };
