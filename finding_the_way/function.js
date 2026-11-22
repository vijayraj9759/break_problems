const findCitiesToExplore = function (connections, city) {
    for (const connection of connections) {
        if (connection.city === city) return connection.connections;
    }

    return [];
};

const isPathExits = function (connections, src, dest, visited = []) {
    if (src === dest) return true;

    visited.push(src);

    const citiesToExplore = findCitiesToExplore(connections, src);

    for (city of citiesToExplore) {
        if (
            !visited.includes(city) &&
            isPathExits(connections, city, dest, visited)
        ) {
            return true;
        }
    }

    return false;
};

module.exports = {
    isPathExits,
};
