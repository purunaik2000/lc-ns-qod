class Trie {
    public boolean leaf;
    public Trie[] children = new Trie[2];
    Trie() {
        this.children[0] = null;
        this.children[1] = null;
        this.leaf = false;
    }
}

class Solution
{
    public static ArrayList<Integer> repeatedRows(int matrix[][], int m, int n)
    {
        //code here
        // HashSet<String> set = new HashSet<String>();
        ArrayList<Integer> res = new ArrayList<Integer>();
        
        // for(int i=0;i<m;i++) {
        //     String s = "";
        //     for(int j=0;j<n;j++) {
        //         s = s + Integer.toString(matrix[i][j]);
        //     }
        //     if(set.contains(s)) res.add(i);
        //     else set.add(s);
        // }
        
        // return res;
        
        Trie head = new Trie();
        
        for(int i=0;i<m;i++) {
            if(!insert(head, matrix[i], n)) res.add(i);
        }
        
        return res;
        
    }
    
    static boolean insert(Trie head, int[] arr, int N) {
        Trie curr = head;
     
        for (int i = 0; i < N; i++)
        {
          //creating a new path if it don not exist/
          if (curr.children[arr[i] ] == null)
            curr.children[arr[i]] = new Trie();
     
          curr = curr.children[arr[i]];
        }
     
        //if the row already exist return false/
        if (curr.leaf) return false;
     
        // making leaf node tree and return true/
        curr.leaf = true;
        return true;
  }
}