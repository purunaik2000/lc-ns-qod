class Solution {
    // Function to reverse first k elements of a queue.
    modifyQueue(q, k) {
        // your code here
        let x = k;
        let y = q.arr.length-k;
        let temp = [];
        while(x--) temp.push(q.pop());
        x = k;
        while(x--) q.push(temp.pop());
        while(y--) q.push(q.pop());
        return q;
    }
}