const { isEqual } = require("./main.js");

const test = function (message, expectedResult, a, b) {
    const actualResult = isEqual(a, b);
    const sign = actualResult === expectedResult ? "✅" : "❌";

    console.log(`${sign} | ${message}`);
};

const booleanChecks = function () {
    test("Two same boolean should be equal", true, true, true);
    test("Two same boolean should be equal", true, false, false);
    test("a boolean and a number should be unequal", false, true, 1);
    test("a boolean and a string should be unequal", false, true, "1");
    test("different boolean values should be unequal", false, true, false);
};

const numberChecks = function () {
    test("Two same numbers should be equal", true, 23, 23);
    test("Two different numbers should be unequal", false, 123, 23);
    test("a number and a string should be unequal", false, 123, "vijay");
};

const stringChecks = function () {
    test("Two same strings should be equal", true, "23", "23");
    test("Two empty strings should be equal", true, "", "");
    test("different strings should be unequal", false, "vijay", "step");
};

const arrayChecks = function () {
    test("Two empty arrays should be equal", true, [], []);
    test("same 1-D arrays should be equal", true, [1, 2, 3, 4], [1, 2, 3, 4]);
    test(
        "same nested arrays should be equal",
        true,
        [1, 2, 3, [2, 4, [2, 3], 7]],
        [1, 2, 3, [2, 4, [2, 3], 7]],
    );
    test(
        "arrays with different values should be unequal",
        false,
        [1, 2, 3],
        [1, 1, 2],
    );
    test(
        "arrays with different length should be unequal",
        false,
        [1, 2, 3],
        [1, 1],
    );
    test("a array and a empty object should be unequal", false, [1, 2, 3], {});
    test(
        "a array and a non - empty object should be unequal",
        false,
        [1, 2, 3],
        { a: 1 },
    );
};

const objectsChecks = function () {
    test("empty objects should be equal", true, {}, {});
    test("same objects should be equal", true, { a: 1 }, { a: 1 });
    test(
        "same nested objects should be equal",
        true,
        { a: { b: 1 } },
        { a: { b: 1 } },
    );
    test(
        "a empty object and a non - empty object should be unequal",
        false,
        {},
        { a: 1 },
    );
    test(
        "two objects with same no of keys and different values should be unequal",
        false,
        { a: 2 },
        { a: 1 },
    );
    test(
        "objects with different no of keys should be unequal",
        false,
        { a: 2, b: 2 },
        { a: 1 },
    );
    test(
        "a object with undefined value and another undefined should be unequal",
        false,
        { a: 1 },
        undefined,
    );
    test(
        "two objects with same keys different order should be equal",
        true,
        { a: 1, b: 2 },
        { b: 2, a: 1 },
    );
};

const undefinedChecks = function () {
    test("Both undefined values should be equal", true, undefined, undefined);
    test(
        "undefined and a array should be unequal",
        false,
        undefined,
        [23, 2, 23],
    );
    test("undefined and a object should be unequal", false, undefined, {
        a: 1,
        b: 2,
    });
    test("undefined and a Null should be unequal", false, undefined, null);
    test("undefined and a NaN should be unequal", false, undefined, NaN);
};

const nanChecks = function () {
    test("Both NaN values should be unequal", false, NaN, NaN);
};

const nullChecks = function () {
    test("Both null values should be equal", true, null, null);
};

const main = function () {
    booleanChecks();
    numberChecks();
    stringChecks();
    arrayChecks();
    objectsChecks();
    undefinedChecks();
    nanChecks();
    nullChecks();
};

main();
