import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
    public static void main (String[] args) {
        // Your code here
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if(n<1) {
            System.out.println(0);
            return;
        }
        long[] arr = new long[n];
        for(int i=0;i<n;i++) {
            arr[i] = sc.nextLong();
        }

        if(n==1) {
            System.out.println(arr[0]);
            return;
        }

        long[] temp = new long[n];

        temp[0] = arr[0];
        temp[1] = Math.max(arr[0], arr[1]);

        for(int i=2;i<n;i++) {
            temp[i] = Math.max(temp[i-2]+arr[i], temp[i-1]);
        }

        System.out.println(temp[n-1]);
    }
}