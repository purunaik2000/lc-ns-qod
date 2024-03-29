class Solution {
    isEularCircuitExist(v, adj){
       //code here
       const visited = new Array(v).fill(false);
       const cur = new Array(v).fill(false);
       
       return dfs(0, -1);
       
       function dfs(node, parent) {
           if(cur[node]) return true;
           if(visited[node]) return false;
           
           visited[node] = true;
           cur[node] = true;
           
           for(let e of adj[node]) {
               if(e == parent) continue;
               if(dfs(e, node)) return true;
           }
           
           cur[node] = false;
           return false;
       }
    }
}

// Not working for some cases