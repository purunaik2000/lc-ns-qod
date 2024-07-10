package lc

func minOperations(logs []string) int {
    c := 0
    for _, str := range logs {
        if str == "./" {
            continue
        }else if str == "../" {
            if c > 0 {
                c--
            }
        }else {
            c++
        }
    }
    return c
}