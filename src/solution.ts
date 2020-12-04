// 统计所有小于非负整数 n 的质数的数量。

export function countPrimes(n: number): number {
    if (n > 2) {
        const primes: number[] = [2]
        for (let i = 3; i < n; i++) {
            let isPrime = true
            for (const prime of primes) {
                if (prime * prime > i) {
                    break
                }
                if (i % prime === 0) {
                    isPrime = false
                    break
                }
            }
            if (isPrime) {
                primes.push(i)
            }
        }
        return primes.length
    } else {
        return 0
    }
}