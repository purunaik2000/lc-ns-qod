package lc
func intersect(nums1 []int, nums2 []int) []int {
    freq := make(map[int]int)
    res := make([]int, 0)

    for _, e := range nums1 {
        freq[e]++
    }

    for _, e := range nums2 {
        if k, v := freq[e]; v && k > 0 {
            res = append(res, e)
            freq[e]--
        }
    }

    return res
}