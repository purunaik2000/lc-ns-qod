/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b)=> a[1]-b[1] || a[0]-b[0]);
    let n = points.length;
    let res = n, p=0;
    for(let i=0;i<n;i++) if(p!=i) (points[i][1]>=points[p][1] && points[p][1]>=points[i][0]) ? res-- : p=i;
    return res;
};