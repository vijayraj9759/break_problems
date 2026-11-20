const { isEqual } = require("../deep_equality/function.js");
const { maximumSubarray } = require("./function.js");

const test = function (message, expectedResult, array) {
    const actualResult = maximumSubarray(array);
    console.log(actualResult);
    const sign = isEqual(expectedResult, actualResult) ? "✅" : "❌";

    console.log(`${sign} | ${message}`);
};

const main = function () {
    test(
        "array should give maximum subarray sum",
        [4, -1, 2, 1],
        [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    );
    test(
        "array with all negative values should largest value as maximum subarray sum",
        [-1],
        [-2, -1, -3, -4, -1, -2, -1, -5, -4],
    );
    test("empty should give 0 as a maximum subarray sum", [], []);
};

main();
