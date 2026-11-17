const { isEqual } = require("./deep_equality.js");

function isInRun(direction, currElement, prevElement) {
    if (direction === 1) return currElement >= prevElement;
    return currElement < prevElement;
}

function findRuns(sequence) {
    const runs = [];

    if (sequence.length === 0) return runs;

    let run = [sequence[0]];
    let d = 0;

    for (let i = 1; i < sequence.length; i++) {
        const currElement = sequence[i];
        const prevElement = run.at(-1);

        if (d === 0) {
            d = currElement >= prevElement ? 1 : -1;
        }

        if (isInRun(d, currElement, prevElement)) {
            run.push(currElement);
        } else {
            runs.push(run);
            run = [currElement];
            d = 0;
        }
    }
    runs.push(run);

    return runs;
}

function printMessage(actualResult, expectedResult, title) {
    const sign = isEqual(actualResult, expectedResult) ? "✅" : "❌";
    console.log(`${sign} : ${title}`);
}

function testEachCase(testCases) {
    for (const testCase of testCases) {
        const title = testCase.title;
        const data = testCase.data;
        const expectedResult = testCase.expectedResult;

        printMessage(findRuns(data), expectedResult, title);
    }
}

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
        title: "Same elements",
        expectedResult: [[2, 2, 2, 2, 2, 2, 3]],
    },
    {
        data: [2],
        title: "Single element",
        expectedResult: [[2]],
    },
    {
        data: [],
        title: "Empty array",
        expectedResult: [],
    },
];

testEachCase(testCases);
