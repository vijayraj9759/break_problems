const { isEqual } = require("../deep_equality/function.js");
const { findPath } = require("./function.js");

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

// console.log(isPathExits());
// console.log(isPathExits(connections, "Mumbai", "New Delhi"));
// console.log(isPathExits(connections, "Mumbai", "Mumbai"));
// console.log(isPathExits(connections, "Mumbai", "UP"));
// console.log(isPathExits(connections, "Kolkata", "Shillong"));
// console.log(isPathExits(connections, "Shillong", "Kolkata"));
// console.log(isPathExits(connections, "Guwahati", "Mumbai"));
// console.log(isPathExits(connections, "Bangalore", "Guwahati"));

const test = function (message, expectedResult, connections, src, dest) {
    const actualResult = findPath(connections, src, dest);
    console.log(actualResult);
    const sign = isEqual(expectedResult, actualResult) ? "✅" : "❌";

    console.log(`${sign} | ${message}`);
};

const main = function () {
    test(
        "It should return a sequence of cities between two cities which has sequence ",
        ["Mumbai", "New Delhi", "Kolkata", "Shillong", "Guwahati"],
        connections,
        "Mumbai",
        "Guwahati",
    );
    test(
        "Two same cities should have path of cities",
        [],
        connections,
        "Mumbai",
        "Mumbai",
    );
    // test(
    //     "No edge detects in a bitmap which has only one row of same pixels",
    //     [[false, false, false, false, false]],
    //     [[220, 220, 220, 220, 220]],
    //     100,
    // );
    // test(
    //     "No edge detects in a bitmap which has only one row of same pixels",
    //     [[false, false, false, false, false]],
    //     [[220, 220, 220, 220, 220]],
    //     100,
    // );
};

main();
