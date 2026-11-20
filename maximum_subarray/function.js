function maximumSubarray(array) {
    let = maxSum = -Infinity;
    let = currSum = 0;

    for (const number of array) {
        currSum += number;

        maxSum = currSum > maxSum ? currSum : maxSum;

        currSum = currSum < 0 ? 0 : currSum;
    }

    return maxSum;
}

module.exports = {
    maximumSubarray,
};
