package lc
func minDays(bloomDay []int, m int, k int) int {
	var n = len(bloomDay)
	if m*k > len(bloomDay) {
		return -1
	}
	var l = 1
	var r = 1000000000
	var mid int
	for l < r {
		mid = l + (r-l)/2
		if helper(bloomDay, mid, k, m, n) {
			r = mid
		} else {
			l = mid + 1
		}
	}
	return r
}

func helper(bloomDay []int, day int, k int, m int, n int) bool {
	var cur = 0
	var count = 0
	for i := 0; i < n; i++ {
		if bloomDay[i] <= day {
			cur++
			if cur == k {
				cur = 0
				count++
				if count == m {
					break
				}
			}
		} else {
            cur = 0
        }
	}
	return count == m
}