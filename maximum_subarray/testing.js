const { isEqual } = require("../deep_equality/function.js");
const { maximumSubarray } = require("./function.js");

const test = function (message, expectedResult, array) {
    const actualResult = maximumSubarray(array);
    const sign = isEqual(expectedResult, actualResult) ? "✅" : "❌";

    console.log(`${sign} | ${message}`);
};

const main = function () {
    test(
        "This array :[-2,1,-3,4,-1,2,1,-5,4] should have 6 as a maximum subarray ",
        6,
        [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    );
};

main();
