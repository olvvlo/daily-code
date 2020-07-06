function fib (n) {
    if (n === 1 || n === 2) return 1
    return fib(n - 2) + fib(n - 1)
}

console.log(fib(1), fib(2), fib(3), fib(4), fib(5), fib(6))

function fib2 (n, first, second) {
    if (n === 1) return first
    return fib2(n - 1, second, first + second)
}

console.log(fib2(1, 1, 1), fib2(2, 1, 1), fib2(3, 1, 1), fib2(4, 1, 1), fib2(5, 1, 1), fib2(6, 1, 1))