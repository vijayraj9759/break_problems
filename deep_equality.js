function isEqual(value1, value2) {
    if (value1 === null || value2 === null)
        return value1 === null && value2 === null;

    if (value1 === value2) return true;
    if (typeof value1 !== "object" && value1 !== value2) return false;

    if (Object.keys(value1).length !== Object.keys(value2).length) return false;

    for (const key in value1) {
        if (!(key in value2) || !isEqual(value1[key], value2[key]))
            return false;
    }

    return Array.isArray(value1) === Array.isArray(value2);
}

module.exports = {
    isEqual,
};
