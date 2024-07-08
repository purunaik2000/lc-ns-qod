package lc

func findTheWinner(n int, k int) int {
    winner := 0
    for i := 1; i <= n; i++ {
        winner = (winner + k) % i
    }
    return winner + 1
}