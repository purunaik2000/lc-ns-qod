class Solution{
    TotalWays(n){
        //code here
        let prev = 1n, cur = 2n;
        for(let i=1;i<n;i++) {
            [prev, cur] = [cur, (prev+cur)%(1000000007n)];
        }
        let res = (cur*cur) % (1000000007n);
        return parseInt(res);
    }
}