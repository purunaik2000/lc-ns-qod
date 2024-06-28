package lc
import "sort"
func maximumImportance(n int, roads [][]int) int64 {
    roadCount := make([]int, n)
    for _, road := range roads {
        a, b := road[0], road[1]
        roadCount[a]++
        roadCount[b]++
    }

    sort.Ints(roadCount)

    var res int64 = 0
    for i := 1; i <= n; i++ {
        res += int64(i) * int64(roadCount[i-1])
    }

    return res;
}