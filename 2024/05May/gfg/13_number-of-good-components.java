import java.util.*;

class Solution {
    public static int findNumberOfGoodComponent(int e, int v, int[][] edges) {
        // code here
        HashMap<Integer, ArrayList<Integer>> map = new HashMap<Integer, ArrayList<Integer>>();

        // Add all the edges to map
        for (int[] edge : edges) {
            if (map.containsKey(edge[0]))
                map.get(edge[0]).add(edge[1]);
            else {
                ArrayList<Integer> list = new ArrayList<Integer>();
                list.add(edge[1]);
                map.put(edge[0], list);
            }
            if (map.containsKey(edge[1]))
                map.get(edge[1]).add(edge[0]);
            else {
                ArrayList<Integer> list = new ArrayList<Integer>();
                list.add(edge[0]);
                map.put(edge[1], list);
            }
        }

        HashSet<Integer> visited = new HashSet<Integer>();
        int count = 0;

        for (int key = 1; key <= v; key++) {
            if (!visited.contains(key)) {
                int[] eCount = { 0 };
                int[] vCount = { 0 };
                dfs(key, visited, map, eCount, vCount);
                if (eCount[0] == vCount[0] * (vCount[0] - 1))
                    count++;
            }
        }

        return count;
    }

    public static void dfs(int key, HashSet<Integer> visited, HashMap<Integer, ArrayList<Integer>> map, int[] e,
            int[] v) {
        if (visited.contains(key))
            return;
        visited.add(key);
        v[0]++;
        if (!map.containsKey(key))
            return;
        e[0] += map.get(key).size();
        for (int newKey : map.get(key))
            dfs(newKey, visited, map, e, v);
    }
}