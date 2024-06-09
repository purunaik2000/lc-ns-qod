import java.util.*;

class Solution {
    public static void zigZag(int n, int[] arr) {
        // code here
        Arrays.sort(arr);
        for (int i = 1; i <= arr.length - 2; i += 2) {
            int temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}