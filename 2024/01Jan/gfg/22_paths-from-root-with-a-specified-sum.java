class Solution
{
    public static ArrayList<ArrayList<Integer>> printPaths(Node root, int sum)
    {
        // code here
        ArrayList<ArrayList<Integer>> res = new ArrayList<ArrayList<Integer>>();
        ArrayList<Integer> temp = new ArrayList<Integer>();
        
        backTrack(root, 0, sum, res, temp);
        
        return res;
    }
    
    public static void backTrack(Node root, int cur, int sum, ArrayList<ArrayList<Integer>> res, ArrayList<Integer> temp) {
        if(root == null) return;
        
        temp.add(root.data);
        cur = cur+root.data;
        
        if(cur == sum) {
            res.add((ArrayList)temp.clone());
        }
        
        backTrack(root.left, cur, sum, res, temp);
        backTrack(root.right, cur, sum, res, temp);
        
        temp.remove(temp.size()-1);
    }
}