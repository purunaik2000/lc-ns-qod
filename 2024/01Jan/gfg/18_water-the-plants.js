class Solution {
    
    min_sprinklers(gallery, n)
    {
        //your code here
        let arr = [];
        for(let i=0;i<n;i++) {
            if(gallery[i] != -1) {
                arr.push([i-gallery[i], i+gallery[i]]);
            }
        }
        
        arr.sort((a,b)=>a[0]-b[0]);
        
        let req = 0, last = -1;
        let i = 0, count = 1;
        while(i<arr.length) {
            if(arr[i][0]<=req) {
                last = Math.max(last, arr[i][1]);
                if(last>=n-1) return count;
                i++;
            }else {
                if(last < req) return -1;
                count++;
                req = last + 1;
                last = -1;
            }
        }
        
        return count;
    }
}