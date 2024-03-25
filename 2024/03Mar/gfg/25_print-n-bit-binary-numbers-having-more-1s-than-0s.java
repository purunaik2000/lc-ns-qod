class Solution {
    ArrayList<String> NBitBinary(int N) {
        // code here
        ArrayList<String> list = new ArrayList<String>();
        
        cal(N-1, list, "1", 1);
        
        return list;
    }
    
    public static void cal(int n, ArrayList<String> list, String res, int count) {
        if(count < 0) return;
        if(n == 0) {
            list.add(res);
            return;
        }
        
        cal(n-1, list, res+"1", count+1);
        cal(n-1, list, res+"0", count-1);
    }
}