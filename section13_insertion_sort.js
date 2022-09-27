//////////////////////////////////////////////////////////////////////////////////////////////
// Insertion Sort:
// ---------------
// General idea - gradually creates sorted left half of arr. we "insert" the curr el into that half

// Big O time complexity:   O(n^2)
// Big O space complexity:   O(1)
// ------------------------------------

// Good use case: Sorting live incoming data where most of the arrray is aleady sorted
// -----------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////
const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let currVal = arr[i]

        for  (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currVal
    }

    return arr
}

console.log(insertionSort([2, 1, 9, 76, 0]))