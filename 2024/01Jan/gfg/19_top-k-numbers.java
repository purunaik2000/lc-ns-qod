class Solution {
    public static ArrayList<ArrayList<Integer>> kTop(int[] arr, int N, int K) {
        // code here
        ArrayList<ArrayList<Integer>> res = new ArrayList<ArrayList<Integer>>();
        ArrayList<Integer> temp = new ArrayList<Integer>();
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        for(int i=0;i<N;i++) {
            int num = arr[i];
            if(map.containsKey(num)) {
                map.put(num, map.get(num)+1);
            }else {
                map.put(num, 1);
            }
            
            if(!temp.contains(num)) temp.add(num);
            
            for(int j=temp.size()-1;j>0;j--) {
                int num1 = temp.get(j-1);
                int num2 = temp.get(j);
                
                if((map.get(num2) > map.get(num1)) || ((map.get(num2) == map.get(num1)) && (num2 < num1))) {
                    Collections.swap(temp, j, j-1);
                }
            }
                
            if(temp.size() > K) temp.remove(temp.size()-1);
            
            ArrayList<Integer> res1 = (ArrayList)temp.clone();
            
            res.add(res1);
        }
        
        return res;
    }
}