const findCitiesToExplore = function (connections, city) {
    for (const connection of connections) {
        if (connection.city === city) return connection.connections;
    }

    return [];
};

const isPathExits = function (connections, src, dest, visited = []) {
    if (src === dest) return true;

    visited.push(src);
    console.log(visited);

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

const connections = [
    {
        city: "Mumbai",
        connections: ["Bangalore", "New Delhi"],
    },
    {
        city: "New Delhi",
        connections: ["Bangalore", "Mumbai", "Kolkata"],
    },
    {
        city: "Bangalore",
        connections: ["Chennai", "Mumbai"],
    },
    {
        city: "Kolkata",
        connections: ["Shillong"],
    },
    {
        city: "Shillong",
        connections: ["Guwahati"],
    },
];

console.log(isPathExits(connections, "Mumbai", "Guwahati"));
console.log(isPathExits(connections, "Mumbai", "New Delhi"));
console.log(isPathExits(connections, "Mumbai", "Guwahati"));
console.log(isPathExits(connections, "Mumbai", "Guwahati"));
