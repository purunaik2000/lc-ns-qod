class Solution 
{
    //Function to get the maximum total value in the knapsack.
    fractionalKnapsack(W, arr, n)
    {
        // code here
        arr.sort((a, b)=>(b.value/b.weight - a.value/a.weight));
        let res = 0;
        for(let e of arr) {
            if(W>e.weight) {
                W -= e.weight;
                res += e.value;
            }else {
                res += e.value * (W/e.weight);
                break;
            }
        }
        return res;
    }
}