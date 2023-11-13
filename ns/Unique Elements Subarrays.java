import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
    public static void main (String[] args) {
        // Your code here
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        for(int i=0;i<n;i++) arr[i] = sc.nextInt();

        Set<Integer> set = new HashSet<Integer>();

        for(int i=0;i<n;i++) set.add(arr[i]);

        int d = set.size();

        int l = 0, r = 0, count = 0;

        Map<Integer, Integer> map = new HashMap<Integer, Integer>();

        while(r<n) {
            if(map.containsKey(arr[r])) {
                map.put(arr[r], map.get(arr[r])+1);
            }else {
                map.put(arr[r], 1);
            }
            while(map.size() == d) {
                count += n-r;
                if(map.get(arr[l]) == 1) {
                    map.remove(arr[l]);
                }else {
                    map.put(arr[l], map.get(arr[l])-1);
                }
                l++;
            }
            r++;
        }
        System.out.println(count);
    }
}