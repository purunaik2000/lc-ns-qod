class Solution
{
    public int min_operations(int []nums)
    {
        // Code here
        int n = nums.length;
        if(n == 1) return 0;
        int[] arr = new int[n];
        int len = 0;
 
        for (int i = 0; i < n; i++) arr[i] = 1;
 
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j] && (i - j) <= (nums[i] - nums[j]))
                    arr[i] = Math.max(arr[i], arr[j] + 1);
            }
            len = Math.max(len, arr[i]);
        }
 
        return n - len;
    }
}