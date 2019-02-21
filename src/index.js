/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    let variable = null;
    let variable2 = null;
    let variable3 = null;
    for (let i = 0; i < preferences.length; i++) {
        variable = preferences[i] - 1;
        variable2 = preferences[variable] - 1;
        variable3 = preferences[variable2] - 1;
        if (variable === variable2) {
            continue;
        };
        if (variable3 === variable2) {
            continue;
        };
        if (variable3 === i) {
            count++;
        };
    };
    return count / 3;
};
