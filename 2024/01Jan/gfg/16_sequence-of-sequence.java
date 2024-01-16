class Solution{
    static int numberSequence(int m, int n)
    {
        // code here
        int count = 0;
        return backTrack(m, n, 0, 1);
    }
    
    public static int backTrack(int m, int n, int index, int val) {
        if(index==n) return 1;
        if(val>m) return 0;
        int count = 0;
        for(int i=val;i<=m;i++) {
            int temp = backTrack(m, n, index+1, i*2);
            if(temp>0) {
                count += temp;
            }else break;
        }
        return count;
    }
}