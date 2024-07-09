package lc

func averageWaitingTime(customers [][]int) float64 {
    n := len(customers)
    curTime := 0
    totalTime := 0.0
    for i := 0; i < n; i++ {
        if curTime <= customers[i][0] {
            totalTime += float64(customers[i][1])
            curTime = customers[i][0] + customers[i][1]
        } else {
            totalTime += float64(curTime - customers[i][0] + customers[i][1])
            curTime += customers[i][1]
        }
    }
    return totalTime / float64(n)
}