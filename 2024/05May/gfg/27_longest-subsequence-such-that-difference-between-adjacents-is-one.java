import java.util.*;

class Solution {
    public static int longestSubseq(int n, int[] a) {
        // code here
        HashMap<Integer, HashMap<Integer, Integer>> dp = new HashMap<Integer, HashMap<Integer, Integer>>();
        int max = 0;
        for(int i=0;i<n;i++) {
            max = Math.max(max, dfs(i+1, a[i], dp, n, a) + 1);
        }
        return max;
    }
    
    static int dfs(int i, int last, HashMap<Integer, HashMap<Integer, Integer>> dp, int n, int[] a) {
        if(i == n) return 0;
        HashMap<Integer, Integer> temp;
        if(dp.size() > i) temp = dp.get(i);
        else {
            temp = new HashMap<Integer, Integer>();
            dp.put(i, temp);
        }
        if(temp.containsKey(last)) return temp.get(last);
        int select = 0;
        if(Math.abs(a[i] - last) == 1) select = dfs(i+1, a[i], dp, n, a) + 1;
        int notSelect = dfs(i+1, last, dp, n, a);
        int res = Math.max(select, notSelect);
        temp.put(last, res);
        return res;
    }
}

// Above solution have TC -> n^2 and SC -> n^2, So it will not work for n greater than 1000.

class Solution2 {
    public static int longestSubseq(int n, int[] a) {
        // code here
        int[] dp = new int[n];
        int result = 1; 
        for (int i = 0; i < n; i++) dp[i] = 1; 
        for (int i = 1; i < n; i++) { 
            for (int j = 0; j < i; j++) { 
                if ((a[i] == a[j] + 1) || (a[i] == a[j] - 1)) dp[i] = Math.max(dp[i], dp[j] + 1); 
            } 
        } 
        for (int i = 0; i < n; i++) if (result < dp[i]) result = dp[i]; 
        return result;
    }
}

// Above solution have TC -> n^2 and SC -> n, So it will not work for n greater than 1000.