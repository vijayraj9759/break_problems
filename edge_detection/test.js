const { isEqual } = require("../deep_equality/function.js");
const { edgeDetection } = require("./function.js");

const test = function (message, expectedResult, image, threshold) {
    const actualResult = edgeDetection(image, threshold);
    console.log(actualResult);
    const sign = isEqual(expectedResult, actualResult) ? "✅" : "❌";

    console.log(`${sign} | ${message}`);
};

const main = function () {
    test(
        "image should return a new image with highlighted edges",
        [
            [false, false, true, false, false],
            [false, false, true, false, false],
            [false, false, true, false, false],
            [false, false, true, false, false],
        ],
        [
            [20, 20, 20, 220, 220],
            [20, 20, 20, 220, 220],
            [20, 20, 20, 220, 220],
            [20, 20, 20, 220, 220],
        ],
        100,
    );
    test(
        "No edge detects in a bitmap which has only one row of same pixels",
        [[false, false, false, false, false]],
        [[220, 220, 220, 220, 220]],
        100,
    );
    test(
        "No edge detects in a bitmap which has only one row of same pixels",
        [[false, false, false, false, false]],
        [[220, 220, 220, 220, 220]],
        100,
    );
};

main();
