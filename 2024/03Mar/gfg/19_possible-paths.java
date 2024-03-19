class Solution { 
    int ans;
    int[] parent;
    int[] size;
    ArrayList<Integer> maximumWeight(int n, int edges[][], int q, int queries[]) {
        // code here   
        parent = new int[n+1];
        size = new int[n+1];
        
        Arrays.fill(size, 1);
        for(int i=0;i<=n;i++) parent[i] = i;
        
        ArrayList<Integer> res = new ArrayList<Integer>();
        Map<Integer, Integer> map = new TreeMap<Integer, Integer>();
        
        Arrays.sort(edges, (a, b) -> a[2]-b[2]);
        
        for(int i=0;i<n-1;i++) {
            map.put(edges[i][2], Union(edges[i][0], edges[i][1]));
        }
        
        for(int query : queries) {
            int maxWeight = 0;
            for(Map.Entry<Integer, Integer> entry : map.entrySet()) {
                if(entry.getKey() <= query) maxWeight = entry.getValue();
                else break;
            }
            res.add(maxWeight);
        }
        
        return res;
    }
    
    int find(int x) {
        if(x == parent[x]) return x;
        return parent[x] = find(parent[x]);
    }
    
    int Union(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);
        
        if(size[rootA] < size[rootB]) {
            ans += size[rootA] * size[rootB];
            parent[rootA] = rootB;
            size[rootB] += size[rootA];
        }else {
            ans += size[rootA] * size[rootB];
            parent[rootB] = rootA;
            size[rootA] += size[rootB];
        }
        
        return ans;
    }
}