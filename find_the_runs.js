const { isEqual } = require("./deep_equality.js");

function findRuns(sequence) {
    if (sequence.length === 0) return [];

    const runs = [];
    let prevOrder = 0;
    let currRun = [sequence[0]];

    for (let i = 1; i < sequence.length; i++) {
        const currOrder = Math.sign(sequence[i] - sequence[i - 1]);

        if (prevOrder === 0) prevOrder = currOrder;

        if (currOrder === 0 || currOrder === prevOrder) {
            currRun.push(sequence[i]);
        } else {
            runs.push(currRun);
            currRun = [sequence[i]];
            prevOrder = 0;
        }
    }
    runs.push(currRun);
    return runs;
}

// function findRuns(sequence) {
//     if (sequence.length === 0) return [];

//     const runs = [];
//     let isAscending = false;
//     let isDesceding = false;
//     let run = [sequence[0]];

//     for (let i = 1; i < sequence.length; i++) {
//         const currElement = sequence[i];
//         const prevElement = run.at(-1);

//         if (!isAscending && !isDesceding) {
//             run.push(currElement);
//             if (currElement > prevElement) isAscending = true;
//             if (currElement < prevElement) isDesceding = true;
//         } else {
//             if (isInRun(isAscending, currElement, prevElement)) {
//                 run.push(currElement);
//             } else {
//                 runs.push(run);
//                 run = [currElement];
//                 isAscending = false;
//                 isDesceding = false;
//             }
//         }
//     }
//     runs.push(run);

//     return runs;
// }

// function findRuns(sequence) {
//     if (sequence.length === 0) return [];

//     const runs = [];
//     let run = [sequence[0]];
//     let d = 0;

//     for (let i = 1; i < sequence.length; i++) {
//         const currElement = sequence[i];
//         const prevElement = run.at(-1);

//         if (d === 0) {
//             d = currElement >= prevElement ? 1 : -1;
//         }

//         if (isInRun(d, currElement, prevElement)) {
//             run.push(currElement);
//         } else {
//             runs.push(run);
//             run = [currElement];
//             d = 0;
//         }
//     }
//     runs.push(run);

//     return runs;
// }

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
        title: "Same elements in increasing order",
        expectedResult: [[2, 2, 2, 2, 2, 2, 3]],
    },
    {
        data: [4, 3, 2, 2, 2, 2, 2, 2],
        title: "Same elements in decreasing order",
        expectedResult: [[4, 3, 2, 2, 2, 2, 2, 2]],
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
