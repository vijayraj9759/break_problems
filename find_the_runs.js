const sequence = [1, 2, 3, 4, 6, 4, 2, 1, 2, 3];
// const sequence = [2, 2, 2, 2, 2, 3];

let subarray = [sequence[0]];
const runs = [];

let d = 0;

for (let i = 1; i < sequence.length; i++) {
    const currElement = sequence[i];
    const prevElement = subarray.at(-1);

    if (d === 0) {
        d = currElement > prevElement ? 1 : -1;
    }

    if (d === 1 && currElement > prevElement) subarray.push(currElement);
    else if (d === -1 && currElement < prevElement) subarray.push(currElement);
    else {
        runs.push(subarray);
        subarray = [currElement];
        d = 0;
    }
}

console.log(runs);
console.log(subarray);
