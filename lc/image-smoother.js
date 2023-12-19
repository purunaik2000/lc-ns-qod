/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let res = new Array(img.length).fill(0).map(x=>new Array(img[0].length));
    function calAvg(x, y) {
        let sum = 0, count = 0;
        for(let i=x-1;i<x+2;i++) {
            for(let j=y-1;j<y+2;j++) {
                if(i<0 || j<0 || i>=img.length || j>=img[0].length) continue;
                sum += img[i][j];
                count++;
            }
        }
        res[x][y] = parseInt(sum/count);
    }

    for(let i=0;i<img.length;i++) {
        for(let j=0;j<img[0].length;j++) calAvg(i, j);
    }

    return  res;
};