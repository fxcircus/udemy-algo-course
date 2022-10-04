/////////////////////////////////////////////////////////////
// 1: Linear search
// Big O time complexity: Best - O(1)    Average - O(n)
/////////////////////////////////////////////////////////////
function linearSearch(arr, n){
    for (let idx in arr) {
        if (arr[idx] === n) return parseInt(idx)
    }
    return -1
}

/////////////////////////////////////////////////////////////
// 2: Binary search (Divide and Conquer)
// Big O time complexity: Best - O(1)    Average - O(log n)
/////////////////////////////////////////////////////////////
function binarySearch(arr, n){
    let lPointer = 0, rPointer = arr.length, mid
    while (lPointer <= rPointer) {
        mid = Math.floor((lPointer + rPointer) / 2)
        if (arr[mid] === n) {
            return mid
        } else if (arr[mid] > n) {
            rPointer = mid - 1
        } else {
            lPointer = mid + 1
        }
    }
    return -1
}

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
