////////////////////////
//  Timing our code:  Not very efficient because results vary, but can return the general trend
//  EX: Write a function that calculates the sum of all nums from 1 to n
////////////////////////

// Linear - O(n)
const sumn1 = (n) => {
    let res = 0
    for (let i = 1; i <= n; i++) {
        res += i // Looop runs 2 operations each run up to n...
    }
    return res
}
let t1 = performance.now()
console.log(sumn1(5))
let t2 = performance.now()

// Constant - O(1)
const sumn2 = (n) => {
    return n * (n + 1) / 2 // 3 operations total regardless if n
}
let t3 = performance.now()
console.log(sumn2(5))
let t4 = performance.now()

console.log(`ver1 took ${t2 - t1} milliseconds\tver2 took ${t4 - t3} milliseconds`)