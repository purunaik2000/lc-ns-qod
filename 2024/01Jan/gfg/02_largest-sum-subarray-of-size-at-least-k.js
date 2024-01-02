class Solution
{
    //Function to find maximum sum subarray by removing at most k elements.
    maxSumWithK(a, n, k)
    {
        //your code here
        let cur = 0, prev = 0;
        for(let i=0;i<k;i++) cur += a[i];
        
        let max = cur;
        
        for(let i=k;i<n;i++) {
            cur += a[i];
            prev += a[i-k];
            if(prev<0) {
                cur -= prev;
                prev = 0;
            }
            max = Math.max(max, cur);
        }
        
        return max;
    }
}