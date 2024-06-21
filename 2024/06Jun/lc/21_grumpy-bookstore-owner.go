package lc
func maxSatisfied(customers []int, grumpy []int, minutes int) int {
    var n = len(grumpy)
    var grumpyCustomers = 0
    var res = 0
    for i, e := range customers {
        if grumpy[i] == 1 {
            grumpyCustomers += e
        } else {
            res += e
        }
    }

    if n <= minutes {
        return grumpyCustomers + res
    }

    var max = 0
    for i := 0; i < minutes; i++ {
        if grumpy[i] == 1 {
            max += customers[i]
        }
    }

    var cur = max
    for i := minutes; i < n; i++ {
        if grumpy[i - minutes] == 1 {
            cur -= customers[i - minutes]
        }
        if grumpy[i] == 1 {
            cur += customers[i]
        }
        if cur > max {
            max = cur
        }
    }

    return res + max
}