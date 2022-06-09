const pair = first => second => ({ first, second })

const head = (p) => p.first

const tail = (p) => p.second

const range = from => to => from > to ? null : pair(from)(range(from + 1)(to))

const map = f => xs => xs === null ? null : pair(f(head(xs)))(map(f)(tail(xs)))

const fizzbuzz = n => ((n % 3 === 0 ? 'Fizz' : '') + (n % 5 == 0 ? 'Buzz' : '')) || n

// functional FizzBuzz solution
const solution = map(fizzbuzz)(range(1)(100))

// non-functional, used for printing
function iterate(xs, f) {
    while (xs !== null) {
        f(head(xs))
        xs = tail(xs)
    }
}

// print the result
iterate(solution, console.log)
