const { isEqual } = require("../deep_equality/function.js");
const { floodFill } = require("./function.js");

const test = function (message, expectedResult, bitmap, targetPos) {
    const actualResult = floodFill(bitmap, targetPos);
    console.log(actualResult);
    const sign = isEqual(expectedResult, actualResult) ? "✅" : "❌";

    console.log(`${sign} | ${message}`);
};

const main = function () {
    test(
        "function should should return the coordinates that fall in the target Coordinates",
        [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [1, 5],
            [2, 5],
            [3, 5],
            [4, 5],
            [5, 4],
            [5, 3],
            [5, 2],
            [5, 1],
            [4, 0],
            [3, 0],
            [2, 0],
            [1, 0],
            [5, 0],
            [5, 5],
        ],
        [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        [0, 0],
    );
    test(
        "function should should return the coordinates that fall in the target Coordinates",
        [
            [2, 3],
            [2, 2],
        ],
        [
            [1, 1, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        [2, 3],
    );
};

main();
