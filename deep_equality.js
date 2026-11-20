const type = function (a) {
    if (Array.isArray(a)) return "array";
    if (a === null) return "null";
    if (Number.isNaN(a)) return "NaN";
    return typeof a;
};

const areSameType = function (a, b) {
    return type(a) === type(b);
};

const valueChecks = function (a, b) {
    return a === b;
};

const areArraysEquals = function (a, b) {
    if (a.length !== b.length) return false;

    for (const index in a) {
        if (!isEqual(a[index], b[index])) return false;
    }

    return true;
};

const areObjectsEquals = function (a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (const key in a) {
        if (!(key in b)) return false;

        if (!isEqual(a[key], b[key])) return false;
    }

    return true;
};

const isEqual = function (a, b) {
    if (!areSameType(a, b)) return false;

    switch (type(a)) {
        case "boolean":
            return valueChecks(a, b);
        case "number":
            return valueChecks(a, b);
        case "string":
            return valueChecks(a, b);
        case "null":
            return valueChecks(a, b);
        case "NaN":
            return valueChecks(a, b);
        case "undefined":
            return valueChecks(a, b);
        case "array":
            return areArraysEquals(a, b);
        case "object":
            return areObjectsEquals(a, b);
    }
};

module.exports = {
    isEqual,
};
