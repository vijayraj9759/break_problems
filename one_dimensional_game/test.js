const { isEqual } = require("../deep_equality/function.js");
const { nextGeneration, nNumberGeneration } = require("./function.js");

const test = function (message, expectedResult, currentGeneration, depth = 1) {
    const actualResult = nNumberGeneration(currentGeneration, depth);
    console.log(actualResult);
    const sign = isEqual(expectedResult, actualResult) ? "✅" : "❌";

    console.log(`${sign} | ${message}`);
};

const main = function () {
    test(
        "for a generation it should return next generation based on rules",
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        1,
    );
    test(
        "for a generation it should return next generation based on rules",
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        2,
    );
    test(
        "for a generation it should return next generation based on rules",
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        3,
    );
    //  test(
    //     "Two same cities should have path of cities",
    //     [],
    //     connections,
    //     "Mumbai",
    //     "Mumbai",
    // );
    // test(
    //     "Two cities that has no path should return a empty sequence",
    //     [],
    //     connections,
    //     "Shillong",
    //     "Kolkata",
    // );
    // test(
    //     "There should be no path for a city that is not mentioned in the connections",
    //     [],
    //     connections,
    //     "New Delhi",
    //     "UP",
    // );
};

// console.log(isPathExits());
// console.log(isPathExits(connections, "Mumbai", "New Delhi"));
// console.log(isPathExits(connections, "Mumbai", "Mumbai"));
// console.log(isPathExits(connections, "Mumbai", "UP"));
// console.log(isPathExits(connections, "Kolkata", "Shillong"));
// console.log(isPathExits(connections, "Shillong", "Kolkata"));
// console.log(isPathExits(connections, "Guwahati", "Mumbai"));
// console.log(isPathExits(connections, "Bangalore", "Guwahati"));

main();
