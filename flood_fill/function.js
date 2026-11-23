const getDefaultVisited = function (bitmap) {
    const visited = [];

    for (const row of bitmap) {
        const rowToPush = [];

        for (const cell of row) {
            rowToPush.push(false);
        }

        visited.push(rowToPush);
    }

    return visited;
};

const findNeighbours = function (bitmap, row, col) {
    const top = Math.max(row - 1, 0);
    const left = Math.max(col - 1, 0);
    const right = Math.min(col + 1, bitmap[row].length - 1);
    const bottom = Math.min(row + 1, bitmap.length - 1);

    return [
        [top, left],
        [top, col],
        [top, right],
        [row, left],
        [row, right],
        [bottom, left],
        [bottom, col],
        [bottom, right],
    ];
};

const coordinatesToFill = function (bitmap, currPos, visited, crdToFill = []) {
    const [row, col] = currPos;
    if (bitmap[row][col] === 1) return crdToFill;

    visited[row][col] = true;
    crdToFill.push([row, col]);

    const neighbours = findNeighbours(bitmap, row, col);

    for (const neighbour of neighbours) {
        if (!visited[neighbour[0]][neighbour[1]]) {
            coordinatesToFill(bitmap, neighbour, visited, crdToFill);
        }
    }

    return crdToFill;
};

const floodFill = function (bitmap, targetToFill) {
    return coordinatesToFill(bitmap, targetToFill, getDefaultVisited(bitmap));
};

const bitmap = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
];
const bitmap1 = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];
const bitmap2 = [
    [1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
];

// console.log(floodFill(bitmap, [0, 0]));
// console.log(floodFill(bitmap1, [2, 2]));
console.log(floodFill(bitmap2, [2, 2]));
// console.log(floodFill(bitmap3, [0, 0]));

module.exports = {
    floodFill,
};
