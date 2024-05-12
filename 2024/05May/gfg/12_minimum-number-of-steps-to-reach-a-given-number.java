class Solution {
    static int minSteps(int d) {
        // code here
        int steps = 0, i = 1, sum = 0;
        while (sum < d) {
            steps++;
            sum += i++;
        }
        steps += (sum - d) % 2 == 1 ? (i % 2 == 0 ? 2 : 1) : 0;
        return steps;
    }
}