const { isEqual } = require("../deep_equality/function.js");
const { isPathExits } = require("./function.js");

const connections = [
    {
        city: "Mumbai",
        connections: ["Bangalore", "New Delhi"],
    },
    {
        city: "New Delhi",
        connections: ["Bangalore", "Mumbai", "Kolkata"],
    },
    {
        city: "Bangalore",
        connections: ["Chennai", "Mumbai"],
    },
    {
        city: "Kolkata",
        connections: ["Shillong"],
    },
    {
        city: "Shillong",
        connections: ["Guwahati"],
    },
];

console.log(isPathExits(connections, "Mumbai", "Guwahati"));
console.log(isPathExits(connections, "Mumbai", "New Delhi"));
console.log(isPathExits(connections, "Mumbai", "Mumbai"));
console.log(isPathExits(connections, "Mumbai", "UP"));
console.log(isPathExits(connections, "Kolkata", "Shillong"));
console.log(isPathExits(connections, "Shillong", "Kolkata"));
console.log(isPathExits(connections, "Guwahati", "Mumbai"));
console.log(isPathExits(connections, "Bangalore", "Guwahati"));

// const test = function (message, expectedResult, image, threshold) {
//     const actualResult = edgeDetection(image, threshold);
//     console.log(actualResult);
//     const sign = isEqual(expectedResult, actualResult) ? "✅" : "❌";

//     console.log(`${sign} | ${message}`);
// };

// const main = function () {
//     test(
//         "image should return a new image with highlighted edges",
//         [
//             [false, false, true, false, false],
//             [false, false, true, false, false],
//             [false, false, true, false, false],
//             [false, false, true, false, false],
//         ],
//         [
//             [20, 20, 20, 220, 220],
//             [20, 20, 20, 220, 220],
//             [20, 20, 20, 220, 220],
//             [20, 20, 20, 220, 220],
//         ],
//         100,
//     );
//     test(
//         "No edge detects in a bitmap which has only one row of same pixels",
//         [[false, false, false, false, false]],
//         [[220, 220, 220, 220, 220]],
//         100,
//     );
//     test(
//         "No edge detects in a bitmap which has only one row of same pixels",
//         [[false, false, false, false, false]],
//         [[220, 220, 220, 220, 220]],
//         100,
//     );
// };

// main();
