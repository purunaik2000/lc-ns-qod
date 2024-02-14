import java.util.*;;

class Solution
{
    public ArrayList<ArrayList<Integer>> criticalConnections(int v, ArrayList<ArrayList<Integer>> adj)
    {
        // Code here
        ArrayList<ArrayList<Integer>> res = new ArrayList<ArrayList<Integer>>();
        int[] rank = new int[v];
        int[] visited = new int[v];
        
        Arrays.fill(rank, -1);
        
        dfs(0, -1, rank, 0, visited, adj, res);
        
        for(ArrayList<Integer> edge : res) {
            Collections.sort(edge);
        }
        
        res.sort((a,b)->{
            if(a.get(0) == b.get(0)) return a.get(1) - b.get(1);
            return a.get(0) - b.get(0);
        });
        
        return res;
    }
    
    public static int dfs(int i, int p, int[] rank, int k, int[] visited, ArrayList<ArrayList<Integer>> adj, ArrayList<ArrayList<Integer>> res) {
        rank[i] = k;
        visited[i] = 1;
        
        int minDepth = Integer.MAX_VALUE;
        
        for(int child : adj.get(i)) {
            if(child != p) {
                if(visited[child] == 1) minDepth = Math.min(minDepth, rank[child]);
                else {
                    int minRank = dfs(child, i, rank, k+1, visited, adj, res);
                    if(rank[i] < minRank) {
                        ArrayList<Integer> edge = new ArrayList<>();
                        edge.add(i);
                        edge.add(child);
                        res.add(edge);
                    }
                    
                    minDepth = Math.min(minDepth, minRank);
                }
            }
        }
        
        return minDepth;
    }
}

// Some test cases are not passed with this solution