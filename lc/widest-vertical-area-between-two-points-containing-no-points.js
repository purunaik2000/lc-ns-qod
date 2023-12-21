/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let temp = points.map(x=>x[0]).sort((a,b)=>a-b);
    let maxDiff = 0;
    for(let i=1;i<temp.length;i++) {
        if(temp[i]-temp[i-1] > maxDiff) maxDiff = temp[i] - temp[i-1];
    }
    return maxDiff;
};