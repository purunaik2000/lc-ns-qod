import java.util.*;

class Solution {
    public List<List<Integer>> CombinationSum2(int arr[], int n, int k) {
        // Code Here.
        List<List<Integer>> list = new ArrayList<List<Integer>>();
        List<Integer> cur = new ArrayList<Integer>();
        
        Arrays.sort(arr);
        
        dfs(0, 0, k, n, list, cur, arr);
        
        return list;
    }
    
    static void dfs(int start, int sum, int k, int n, List<List<Integer>> list, List<Integer> cur, int[] arr) {
        if(sum == k) {
            List<Integer> res = new ArrayList<Integer>();
            res.addAll(cur);
            list.add(res);
            return;
        }
        if( start == n) return;
        if(sum > k) return;
        
        for(int i=start;i<n;i++) {
            if(i > start) if(arr[i] == arr[i-1]) continue;
            cur.add(arr[i]);
            dfs(i + 1, sum + arr[i], k, n, list, cur, arr);
            cur.remove(cur.size() - 1);
        }
    }
}