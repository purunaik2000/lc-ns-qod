/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
    const pq = new MaxPriorityQueue();
    let total = 0,
        min = Infinity;

    quality
        .map((q, i) => [q, wage[i]])
        .sort((a, b) => a[1] / a[0] - b[1] / b[0])
        .forEach(([q, w]) => {
            total += q;
            pq.enqueue(q);

            if (pq.size() > k) total -= pq.dequeue().element;
            if (pq.size() === k)
                min = Math.min(min, ((total * w) / q).toFixed(5));
        });

    return min;
};