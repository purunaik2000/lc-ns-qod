import java.util.*;

class Solution {
    public int minimumEdgeRemove(int n, int[][] edges) {
        // code here
        List<Integer>[] adj = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            adj[i] = new ArrayList<>();
        }

        // Populate adjacency list
        for (int[] edge : edges) {
            adj[edge[0] - 1].add(edge[1] - 1);
            adj[edge[1] - 1].add(edge[0] - 1);
        }

        int[] vis = new int[n];

        int[] ans = { 0 };

        dfs(adj, vis, 0, ans);

        return ans[0];
    }

    static int dfs(List<Integer>[] adj, int[] vis, int start, int[] ans) {
        vis[start] = 1;
        int cnt = 0;

        for (int it : adj[start]) {
            if (vis[it] == 0) {
                int res = dfs(adj, vis, it, ans);
                if (res % 2 == 0) {
                    ans[0]++;
                } else {
                    cnt += res;
                }
            }
        }

        return cnt + 1;
    }
}