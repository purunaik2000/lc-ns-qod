class Solution {
    criticalConnections(V,adj){
      //code here
      const ans = [];
      const rank = new Array(V).fill(-1);
      const vis = new Array(V).fill(0);
   
      // Depth-first search to find critical connections
      function dfs(i, p, k) {
          rank[i] = k;
          vis[i] = 1;
          let minDepth = Infinity;
   
          for (const ch of adj[i]) {
              if (ch !== p) {
                  if (vis[ch] === 1) {
                      minDepth = Math.min(minDepth, rank[ch]);
                  } else {
                      const minRank = dfs(ch, i, k + 1);
   
                      if (rank[i] < minRank) {
                          ans.push([i, ch]);
                      }
   
                      minDepth = Math.min(minRank, minDepth);
                  }
              }
          }
          return minDepth;
      }
   
      dfs(0, -1, 0);
   
      // Sort each edge in ascending order of nodes
      ans.forEach(edge => {
          edge.sort((a, b) => a - b);
      });
   
      // Sort the list of edges
      ans.sort((a, b) => {
          if (a[0] === b[0]) {
              return a[1] - b[1];
          }
          return a[0] - b[0];
      });
   
      return ans;
    }
  }