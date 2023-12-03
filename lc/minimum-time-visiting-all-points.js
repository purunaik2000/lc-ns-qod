/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let x = points[0][0], y = points[0][1], time = 0;
    for(let [x1, y1] of points) {
        time += Math.max(Math.abs(x-x1), Math.abs(y-y1));
        x = x1;
        y = y1;
    }
    return time;
};