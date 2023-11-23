import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
    public static void main (String[] args) {
        // Your code here
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        if(n<10) {
            System.out.println(n);
            return;
        }

        int last = n%10;
        int count = 0;

        n /= 10;

        while( n > 0) {
            count += Math.abs(n%10 - last);
            last = n % 10;
            n /= 10;
        }

        System.out.println(count);
    }
}