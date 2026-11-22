const findCitiesToExplore = function (connections, city) {
    for (const connection of connections) {
        if (connection.city === city) return connection.connections;
    }

    return [];
};

const findPath = function (connections, src, dest, visited = [], path = []) {
    if (src === dest) return path;

    visited.push(src);
    path.push(src);

    console.log(path);

    const citiesToExplore = findCitiesToExplore(connections, src);

    for (city of citiesToExplore) {
        if (city === dest) {
            path.push(dest);
            return path;
        }
        if (!visited.includes(city)) {
            findPath(connections, city, dest, visited, path);
            if (path.at(-1) === dest) return path;
        }
    }

    path.pop();

    return path;
};
// const isPathExits = function (connections, src, dest, visited = []) {
//     if (src === dest) return true;

//     visited.push(src);

//     const citiesToExplore = findCitiesToExplore(connections, src);

//     for (city of citiesToExplore) {
//         if (
//             !visited.includes(city) &&
//             isPathExits(connections, city, dest, visited)
//         ) {
//             return true;
//         }
//     }

//     return false;
// };

module.exports = {
    findPath,
};
