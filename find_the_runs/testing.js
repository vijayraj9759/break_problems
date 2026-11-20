const { findRuns } = require("./function.js");
const { isEqual } = require("../deep_equality/function.js");

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
