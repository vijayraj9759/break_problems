// const collections = ["apple", "banana", "apple", "orange", "banana"];
// const collections = [2, 4, 2, 3, 2, 4, 4, 1, 23, 2, 4, 1, 12, 1];
const collections = ["Vijay", "yash", "Vijay", "vijay", "yash"];

const frequencyTable = {};

for (const item of collections) {
    if (item in frequencyTable) frequencyTable[item]++;
    else frequencyTable[item] = 1;
}

console.log(frequencyTable);
