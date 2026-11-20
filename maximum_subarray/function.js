function maximumSubarray(array) {
    if (array.length === 0) return [];

    let maxSum = -Infinity;
    let currSum = 0;

    const maxSubarrayIndex = [];
    let subarraySt = 0;

    for (let index = 0; index < array.length; index++) {
        currSum += array[index];

        if (currSum > maxSum) {
            maxSum = currSum;
            maxSubarrayIndex[0] = subarraySt;
            maxSubarrayIndex[1] = index;
        }

        if (currSum < 0) {
            currSum = 0;
            subarraySt = index + 1;
        }
    }

    const [st, end] = maxSubarrayIndex;
    return array.slice(st, end + 1);
}

module.exports = {
    maximumSubarray,
};
