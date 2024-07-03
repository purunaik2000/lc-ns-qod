package lc
import "sort"

func minDifference(nums []int) int {
    n := len(nums)
    if n <= 3 {
        return 0
    }
    sort.Ints(nums);
    return int(math.Min(math.Min(float64(nums[n-1] - nums[3]), float64(nums[n-2] - nums[2])), math.Min(float64(nums[n-3] - nums[1]), float64(nums[n-4] - nums[0] ))))
}