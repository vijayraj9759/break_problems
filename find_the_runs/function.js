const isItBelongs = function (run, number) {
    if (run.length < 2) return true;

    const d1 = Math.sign(number - run.at(-1));
    const d2 = Math.sign(run.at(-1) - run.at(-2));

    if (d1 + d2 === 1) return true;

    return d1 === d2;
};

const findRuns = function (sequence) {
    const runs = [[]];

    for (const number of sequence) {
        if (!isItBelongs(runs.at(-1), number)) {
            runs.push([]);
        }
        runs.at(-1).push(number);
    }

    return runs;
};

module.exports = {
    findRuns,
};
