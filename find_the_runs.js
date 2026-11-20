const { isEqual } = require("./deep_equality.js");

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

const printMessage = function (actualResult, expectedResult, title) {
    const sign = isEqual(actualResult, expectedResult) ? "✅" : "❌";
    console.log(`${sign} : ${title}`);
};

const testEachCase = function (testCases) {
    for (const testCase of testCases) {
        const { title, data, expectedResult } = testCase;
        const acutalResult = findRuns(data);

        printMessage(acutalResult, expectedResult, title);
    }
};

const testCases = [
    {
        data: [1, 2, 3, 4, 6, 4, 2, 1, 2, 3],
        title: "multiple subarrays",
        expectedResult: [
            [1, 2, 3, 4, 6],
            [4, 2, 1],
            [2, 3],
        ],
    },
    {
        data: [2, 2, 2, 2, 2, 2, 3],
        title: "Same elements in increasing order",
        expectedResult: [[2, 2, 2, 2, 2, 2, 3]],
    },
    {
        data: [4, 3, 2, 2, 2, 2, 2, 2],
        title: "Same elements in decreasing order",
        expectedResult: [
            [4, 3, 2],
            [2, 2, 2, 2, 2],
        ],
    },
    {
        data: [2],
        title: "Single element",
        expectedResult: [[2]],
    },
    {
        data: [],
        title: "Empty array",
        expectedResult: [[]],
    },
    {
        data: [
            4, 3, 2, 2, 2, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 6, 5, 4, 3, 2, 1, 0,
        ],
        title: "array with increasing and decreasing order ",
        expectedResult: [
            [4, 3, 2],
            [2, 2],
            [1, 2, 3, 4, 5, 5, 5, 6, 7, 7],
            [6, 5, 4, 3, 2, 1, 0],
        ],
    },
];

testEachCase(testCases);
