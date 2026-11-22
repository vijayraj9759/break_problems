const isEdge = function (current, rightNeighbour, bottomNeighbour, threshold) {
    return (
        Math.abs(rightNeighbour - current) > threshold ||
        Math.abs(bottomNeighbour - current) > threshold
    );
};

const edgeDetection = function (bitmap, threshold) {
    const detectedBitmap = [];

    for (let i = 0; i < bitmap.length; i++) {
        const detectedRow = [];
        const bottomRow = Math.min(bitmap.length - 1, i + 1);

        for (let j = 0; j < bitmap[0].length; j++) {
            const rightCol = Math.min(bitmap[0].length - 1, j + 1);

            const rightNeighbour = bitmap[i][rightCol];
            const bottomNeighbour = bitmap[bottomRow][j];

            const pixelToAdd = isEdge(
                bitmap[i][j],
                rightNeighbour,
                bottomNeighbour,
                threshold,
            );

            detectedRow.push(pixelToAdd);
        }
        detectedBitmap.push(detectedRow);
    }
    return detectedBitmap;
};

module.exports = {
    edgeDetection,
};
