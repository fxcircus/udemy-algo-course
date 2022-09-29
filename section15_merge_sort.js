//////////////////////////////////////////////////////////////////////////////////////////////
// Insertion Sort:
// ---------------
// General idea - Break array into smaller arrays and then sort and merge them back together
// Big O time complexity:       O(n log n)
// Big O space complexity:      O(n)
//////////////////////////////////////////////////////////////////////////////////////////////

// Step 1: merging function - takes 2 SORTED arrays and puts them together. O(n + m) complexity
const merge = (arr1, arr2) => {
    const res = []
    let i = 0, j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        } 
    }
    // push remaining elements
    while(i < arr1.length) {
        res.push(arr1[i])
        i++
    }
    while(j < arr2.length) {
        res.push(arr2[j])
        j++
    }
    return res
}
// console.log(merge([1, 5, 10], [2, 14, 99, 100])) // ex: merging 2 SORTED arrs

// Step 2: using slice to split the array to smaller arrays until length <=1
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([10, 24, 76, 73])) // [ 10, 24, 73, 76 ]