/*
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
// Ex.2: "areThereDuplicates"
/////////////////////////////////////////////////////////////
console.log('\nareThereDuplicates:\n')
/////////////////////////////////////////////////////////////
// 1. Understand the problem:
// Functions accepts variable number of arguments
// Returns true if there are any duplicates
// Restrictions: Time and Space - O(n)
// Q: what data types can we expect to receive? int, strings, arrays etc'..
// Q: can more than 1 type be passed? strings AND ints for example?

/////////////////////////////////////////////////////////////
// 2. Explore examples:
// (1, 2, 3) // false
// ('a', 'b', 'c', 'a') // true 
// ('a', 'b', 6, 6) // true

/////////////////////////////////////////////////////////////
// 3. Break it down (pseudocode):
// Edge case: exit if 0 args passed
// init 2 pointers for first and last pos in args array
// iterate with while loop.
// return true if p1 and p2 are equal
// keep bringing them closer
// return false in the end

/////////////////////////////////////////////////////////////
// 4. Solve or simplify if not able to produce full solution:

const  areThereDuplicates = (...args) => {
    if (args.length === 0) {
        return false
    } else {
        let p1 = 0, p2 = 1
        args.sort()
        while (p2 < args.length) {
            // compare without type
            console.log(`args[p1] = ${args[p1]}\targs[p2] = ${args[p2]}`)
            if (args[p1] == args[p2]) {
                return true
            }
            p1++
            p2++
        }
    }
    return false
  }

console.log(areThereDuplicates('a', 8, 'k', 'a'))
console.log(areThereDuplicates(3, 2, 1, 4, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))

/////////////////////////////////////////////////////////////
// Ex.3: "averagePair"
/////////////////////////////////////////////////////////////
console.log('\naveragePair:\n')
/////////////////////////////////////////////////////////////
// 1. Understand the problem:
// Function takes in sorted num array and target average
// returns true if there are 1 or more pairs that match the average target
// Time: O(N)
// Space: O(1)

/////////////////////////////////////////////////////////////
// 2. Explore examples:
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

/////////////////////////////////////////////////////////////
// 3. Break it down (pseudocode):
// Edge case: returrn false if array is empty
// init 2 pointers
// iterate over sorted array, add nums and div by 2-
// return true if avg matches target
// return false if none found after loop

/////////////////////////////////////////////////////////////
// 4. Solve or simplify if not able to produce full solution:
const averagePair = (arr, avg) => {
    if (arr.length === 0) {
        return false
    } else {
        let p1 = 0, p2 = arr.length - 1
        while (p1 < p2) {
            let currAvg = (arr[p1] + arr[p2]) / 2
            console.log(`arr[p1] = ${arr[p1]}\tarr[p2] = ${arr[p2]}\tcurrAvg = ${currAvg}`)
            if (currAvg === avg) {
                return true
            } else if(currAvg > avg) {
                p2--
            }   else if(currAvg < avg) {
                p1++
            }
        }
    }
    return false
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1))// false
console.log(averagePair([],4))// false

/////////////////////////////////////////////////////////////
// Ex.4: "isSubsequence"
/////////////////////////////////////////////////////////////
console.log('\nisSubsequence:\n')
/////////////////////////////////////////////////////////////
// 1. Understand the problem:
// Function takes 2 strings, returns true if  all the chars from str1 exist in str2 IN THE SAME ORDER

/////////////////////////////////////////////////////////////
// 2. Explore examples:
// ["YYZ", 'Rush's song YYZ is OK] // true
// ["Code", "Close to the edge"] //false because of the oder
// Q: do we need to account for lowercase and uppercase? what about numbers?

/////////////////////////////////////////////////////////////
// 3. Break it down (pseudocode):
// Edge case: return false if length of ONLY ONE OF str1 or str2 is 0
// init  2 pointers, p1 with value 0 for str1 and p2 with value of length of str2
// init lastPos var with value 0
// use for in loop to iterate over str1
// look for matches, save match pos in lastPos var
// return false if lastPos > latest match

/////////////////////////////////////////////////////////////
// 4. Solve or simplify if not able to produce full solution:

const isSubsequence = (str1, str2) => {
    if((str1.length === 0 && str2.length === 0) || (str1.length === 0 && str2.length !== 0) || (str1.length !== 0 && str2.length === 0)) {
        return false
    } else {
        let p1 = 0, p2 = 0
        while (p2 < str2.length) {
            if  (str1[p1] === str2[p2]) {
                p1++
            }
            if (p1 === str1.length) {
                return true
            }
            p2++
        }
    }
    return false
}
console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)
// console.log(isSubsequence("","")) // false (edge case)
// console.log(isSubsequence("a","")) // false (edge case)
// console.log(isSubsequence("","a")) // false (edge case)
*/
/////////////////////////////////////////////////////////////
// Ex.4: "maxSubarraySum"
/////////////////////////////////////////////////////////////
console.log('\nmaxSubarraySum:\n')
/////////////////////////////////////////////////////////////
// 1. Understand the problem:
// Function takes array and int for num of elements. returns max sum of cunsecutive elements.

/////////////////////////////////////////////////////////////
// 2. Explore examples:
// ([1, 2, 3 , 0,  5, 9], 3) ==> 14
// ([a, ...], 2) ==> null
// ([], 2) ==> null

/////////////////////////////////////////////////////////////
// 3. Break it down (pseudocode):
// Edge case: return null if empty array OR has fewer elements than n
// init maxSum and tempSum vars with val 0
// get initial maxSum by iterating and summing first n elements
// exit loop, start a new loop
// iterate over array again, starting from n element. For each run-
// Subtract last element and add next element.
// Compare to maxSum
// Return maxSum

/////////////////////////////////////////////////////////////
// 4. Solve or simplify if not able to produce full solution:

const maxSubarraySum = (arr, num) => {
    if (arr.length < num) {
        return null
    } else {
        let maxSum = 0, tempSum = 0
        for (let i = 0; i < num; i++) {
            maxSum += arr[i]
        }
        tempSum = maxSum
        for (let i = num; i < arr.length; i++) {
            tempSum = tempSum - arr[i - num] + arr[i]
            maxSum = maxSum < tempSum ? tempSum : maxSum
        }
        return maxSum
    }
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// console.log(maxSubarraySum([2,3], 3)) //null