import java.util.*;

class Solution {
    public boolean isEularCircuitExist(int v, ArrayList<ArrayList<Integer>> adj) {
        // Code here
        HashSet<Integer> visited = new HashSet<Integer>();
        HashSet<Integer> cur = new HashSet<Integer>();
        
        return dfs(0, visited, cur, -1, adj);
    }
    
    public static boolean dfs(int node, HashSet<Integer> visited, HashSet<Integer> cur, int parent, ArrayList<ArrayList<Integer>> adj) {
        if(cur.contains(node)) return true;
        if(visited.contains(node)) return false;
        
        visited.add(node);
        
        ArrayList<Integer> list = adj.get(node);
        
        cur.add(node);
        for(int i=0;i<list.size();i++) {
            if(list.get(i) == parent) continue;
            if(dfs(list.get(i), visited, cur, node, adj)) return true;
        }
        cur.remove(node);
        
        return false;
    }
}

// not working for some cases