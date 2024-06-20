package lc
import "sort"
func maxDistance(position []int, m int) int {
    var n = len(position)
    sort.Ints(position)
    var l = 1
    var r = 1000000000
    var mid int
    for l < r {
        mid = l + (r - l + 1) / 2
        if helper20(position, m, n, mid) {
            l = mid
        } else {
            r = mid - 1
        }
    }
    return l
}

func helper20(position []int, m int, n int, pos int) bool {
    var last = position[0]
    var placed = 1
    for i := 1; i < n; i++ {
        if position[i] - last >= pos {
            placed++
            last = position[i]
            if placed == m {
                return true
            }
        }
    }
    return false
}