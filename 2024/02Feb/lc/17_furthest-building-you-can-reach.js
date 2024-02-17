/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let pq = new MaxPriorityQueue();

    for(let i=1;i<heights.length;i++) {
        let diff = heights[i] - heights[i-1];
        console.log(i, bricks);
        if(diff > 0) {
            if(bricks >= diff) {
                bricks -= diff;
                pq.enqueue(diff);
            } else {
                if(ladders > 0) {
                    ladders--;
                    if(pq.size() > 0) {
                        let usedBricks = pq.dequeue().element;
                        if(diff < usedBricks) {
                            bricks += usedBricks - diff;
                            pq.enqueue(diff);
                        }else pq.enqueue(usedBricks);
                    }
                }else return i-1;
            }
        }
    }
    return heights.length-1;
};