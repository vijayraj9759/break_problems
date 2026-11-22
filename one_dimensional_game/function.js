const nextGeneration = function (currGen) {
    const nextGeneration = [];

    for (let i = 0; i < currGen.length; i++) {
        const left = i === 0 ? 0 : currGen[i - 1];
        const right = i === currGen.length - 1 ? 0 : currGen[i + 1];
        const center = currGen[i];

        nextGeneration.push(left ^ (center | right));
    }
    return nextGeneration;
};

const nNumberGeneration = function (currentGeneration, depth) {
    if (depth === 0) return currentGeneration;
    return nNumberGeneration(nextGeneration(currentGeneration), depth - 1);
};

module.exports = {
    nextGeneration,
    nNumberGeneration,
};
