/////////////////////////////////////////////////////////////
// Ex.1: "sameFrequency"
/////////////////////////////////////////////////////////////
console.log('\nsameFrequency:\n')
/////////////////////////////////////////////////////////////
// 1. Understand the problem:
// Function takes in num1 and num2
// return true if the numbers have the same number of occurences for each digit
// Time: O(N)

/////////////////////////////////////////////////////////////
// 2. Explore examples:
// sameFrequency(182,281) // true
// sameFrequency(3589578, 5879385) // true
// sameFrequency(-222,222) // true

/////////////////////////////////////////////////////////////
// 3. Break it down (pseudocode):
// Edge case: exit if nums have different lengths
// Create 2 strings and convert the input nums to strings
// create 2 freq counter objects
// Iterate over the strings to count the frequencies
// compare the key value pairs, return false if mismatch is found
// return true in the end

/////////////////////////////////////////////////////////////
// 4. Solve or simplify if not able to produce full solution:
const sameFrequency = (num1, num2) => {
    let n1 = `${num1}`, n2 = `${num2}`
    if (n1.length !== n2.length) {
        return false
    } else {
        const freq1 = {}, freq2 = {}
        for (const d in n1) {
            freq1[n1[d]] = (freq1[n1[d]] || 0) + 1
        }
        for (const  d in n2) {
            freq2[n2[d]] = (freq2[n2[d]] || 0) + 1
        }
        for (const d in freq1) {
            if(!(d in freq2)) {
                return false
            } else if (freq1[d] !== freq2[d]) {
                return false
            }
        }
    }
    return true
}


console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false

/////////////////////////////////////////////////////////////
// Ex.1: "areThereDuplicates"
/////////////////////////////////////////////////////////////
console.log('\nareThereDuplicates:\n')