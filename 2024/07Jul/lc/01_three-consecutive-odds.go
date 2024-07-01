package lc
func threeConsecutiveOdds(arr []int) bool {
    ods := 0
    for _, e := range arr {
        if e%2 == 1 {
            ods++
            if ods == 3 {
                return true
            }
        } else {
            ods = 0
        }
    }
    return false
}