function isInOrder(direction, currElement, prevElement) {
    if (direction === 1) return currElement > prevElement;
    return currElement < prevElement;
}

const sequence = [1, 2, 3, 4, 6, 4, 2, 1, 2, 3];
// const sequence = [2, 2, 2, 2, 2, 3];
// const sequence = [2];
// const sequence = [];

const runs = [];

let subarray = sequence.length !== 0 ? [sequence[0]] : [];
let d = 0;

for (let i = 1; i < sequence.length; i++) {
    const currElement = sequence[i];
    const prevElement = subarray.at(-1);

    if (d === 0) {
        d = currElement > prevElement ? 1 : -1;
    }

    if (isInOrder(d, currElement, prevElement)) {
        subarray.push(currElement);
    } else {
        runs.push(subarray);
        subarray = [currElement];
        d = 0;
    }
}
runs.push(subarray);

console.log(runs);
