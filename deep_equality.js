function isEqual(value1, value2) {
    if (value1 === value2) return true;

    if (typeof value1 === "object" && typeof value2 === "object") {
        if (Array.isArray(value1) && Array.isArray(value2)) {
            if (value1.length != value2.length) return false;

            for (let i = 0; i < value1.length; i++) {
                if (!isEqual(value1[i], value2[i])) return false;
            }

            return true;
        }

        if (Object.keys(value1).length != Object.keys(value2).length)
            return false;

        for (const key in value1) {
            if (!isEqual(value1[key], value2[key])) return false;
        }

        return true;
    }

    return false;
}

function printMessage(actualResult, expectedResult, title) {
    const sign = actualResult === expectedResult ? "✅" : "❌";
    console.log(`${sign} : ${title}`);
}

function testEachCase(testData) {
    for (const data of testData) {
        const title = data.title;
        const value1 = data.a;
        const value2 = data.b;
        const expectedResult = data.expectedResult;

        printMessage(isEqual(value1, value2), expectedResult, title);
    }
}

const testData = [
    {
        title: "equal Primitive Values",
        a: 23,
        b: 23,
        expectedResult: true,
    },
    {
        title: "unequal Primitive Values",
        a: 23,
        b: "23",
        expectedResult: false,
    },
    {
        title: "equal Array Values",
        a: [23, 34, 34, 234, 2],
        b: [23, 34, 34, 234, 2],
        expectedResult: true,
    },
    {
        title: "unequal Array Values",
        a: [23, 23, 2, 4, 2, 2, 2],
        b: [23, 34, 234, 5, 23, 23, 2],
        expectedResult: false,
    },
    {
        title: "different length arrays",
        a: [234, 34, 3, 22, 2, 3, 4],
        b: [23, 23, 4],
        expectedResult: false,
    },
    {
        title: "Empty arrays",
        a: [],
        b: [],
        expectedResult: true,
    },
    {
        title: "1-level Nested Equal Arrays",
        a: [
            24,
            234,
            35,
            23,
            3,
            4,
            3,
            [4, 34, 34, 23, 213, 2],
            [343, 234, 34],
            24,
        ],
        b: [
            24,
            234,
            35,
            23,
            3,
            4,
            3,
            [4, 34, 34, 23, 213, 2],
            [343, 234, 34],
            24,
        ],
        expectedResult: true,
    },
    {
        title: "mutli-level Nested Equal Arrays",
        a: [
            24,
            234,
            35,
            23,
            3,
            4,
            3,
            [
                4,
                34,
                [24, 23, 243, [23, 234, 234, 234, 2], 2, 323],
                34,
                23,
                213,
                2,
            ],
            [343, 234, [23, 23, 2, 35, 65, 67], 34],
            24,
        ],
        b: [
            24,
            234,
            35,
            23,
            3,
            4,
            3,
            [
                4,
                34,
                [24, 23, 243, [23, 234, 234, 234, 2], 2, 323],
                34,
                23,
                213,
                2,
            ],
            [343, 234, [23, 23, 2, 35, 65, 67], 34],
            24,
        ],
        expectedResult: true,
    },
    {
        title: "nested Empty Equal arrays",
        a: [, [, [, [,]]]],
        b: [, [, [, [,]]]],
        expectedResult: true,
    },
    {
        title: "Equal objects",
        a: { name: "Vijay", roll: 23 },
        b: { name: "Vijay", roll: 23 },
        expectedResult: true,
    },
    {
        title: "different objects value",
        a: { name: "Vijay", roll: 23 },
        b: { name: "Sampath", roll: 23 },
        expectedResult: false,
    },
    {
        title: "different no of keys of Objects",
        a: { name: "Vijay", roll: 23, id: 1212 },
        b: { name: "Sampath", roll: 23 },
        expectedResult: false,
    },
    {
        title: "different  order of keys of Objects",
        a: { roll: 23, name: "Vijay" },
        b: { name: "Vijay", roll: 23 },
        expectedResult: true,
    },
    {
        title: "values as equal arrays of Objects",
        a: { roll: [23, 35, 3], name: "Vijay" },
        b: { name: "Vijay", roll: [23, 35, 3] },
        expectedResult: true,
    },
    {
        title: "values as unequal arrays of Objects",
        a: { roll: [23, 35, 3], name: "Vijay" },
        b: { name: "Vijay", roll: [23, 353] },
        expectedResult: false,
    },
];

testEachCase(testData);
