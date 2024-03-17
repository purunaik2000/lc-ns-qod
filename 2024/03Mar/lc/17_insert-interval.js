/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let i=0, n=intervals.length;
    if(n==0) return [newInterval];
    if(intervals[0][0]>newInterval[0]){
        if(intervals[0][0]>newInterval[1]){
            intervals.unshift(newInterval);
            return intervals;
        }
        intervals[0][0]=newInterval[0];
        while(i+1<intervals.length && intervals[1][0]<=newInterval[1]){
            newInterval[1] = Math.max(intervals[1][1], newInterval[1]);
            intervals.splice(1,1);
        }
        intervals[0][1] = Math.max(intervals[0][1], newInterval[1]);
        return intervals;
    }
    while(i<n && intervals[i][0]<newInterval[0]) i++;
    if(i>0 && intervals[i-1][1]>=newInterval[0]){
        if(intervals[i-1][1]>=newInterval[1]) return intervals;
        while(i<intervals.length && newInterval[1]>=intervals[i][0]){
            newInterval[1]=Math.max(newInterval[1], intervals[i][1]);
            intervals.splice(i, 1);
        }
        intervals[i-1][1]=newInterval[1];
    }else if(i<n && intervals[i][0]<=newInterval[1]){
        intervals[i][0] = newInterval[0];
        i++;
        while(i<intervals.length && newInterval[1]>=intervals[i][0]){
            newInterval[1]=Math.max(newInterval[1], intervals[i][1]);
            intervals.splice(i, 1);
        }
        intervals[i-1][1] = Math.max(intervals[i-1][1], newInterval[1]);
    }else intervals.splice(i, 0, newInterval);
    return intervals;
};