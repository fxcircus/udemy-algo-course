/* Insertion Sort:
------------------
General idea - Split array into smaller arrays (recursion) and then sort back together by pivot el
Big O time complexity:       Best==> O(n log n)  Worst==> O(n^2)
Big O space complexity:      O(n log n)
*/

/* Step 1 - pivot \ partition function:
---------------------------------------
Takes array. We decide on element to pivot.
IF el > pivot  ==> move to right side of the arr.
IF el <  pivot ==> move to left...
return final pivot idx.
***pivot effects runtime! in this example we use 1st el of array.
We want to try to pivot around the median val when possible. */
const pivot = (arr, start = 0, end = arr.length + 1) => {
    // Helper function - swap array elements:
    const swap = (arr, i, j) => {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }

    let pivot = arr[start], swapIdx = start

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }

    swap(arr, start, swapIdx)
    return swapIdx
}
// console.log (pivot([4, 8, 2, 1, 5, 7, 6, 3]))

// Step 2: sort function
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    // base case: if left < right then arr.length > 1
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]))
// [ -3, 1, 2, 2, 3, 4, 5, 6, 9, 23, 100]