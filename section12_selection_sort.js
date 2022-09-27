//////////////////////////////////////////////////////////////////////////////////////////////
// Selection Sort:
// ---------------
// General idea - "next smallest val" is sorted on each run
// Init var to hold smallest val in array. Val is 0 (beginning of array)
// Loop over arr and compare cur el to min val
// If arr[j] < minIdx AND differnt indeces ==> minIdx = j (index of arr[j])
// Move smallest el to idx i at end of run
// If no swaps ==> break
// return sorted arr

// Big O time complexity:   O(n^2)
// ------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////
const selectionSort = (arr) => {
    let noSwapsOnLastIteration
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i
        noSwapsOnLastIteration = true
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIdx]) minIdx  = j
        }
        if (minIdx !== i) {
            noSwapsOnLastIteration = false
            tmpVal = arr[i]
            arr[i] = arr[minIdx]
            arr[minIdx] = tmpVal
        }
    if (noSwapsOnLastIteration) break
    }
    return arr
}
console.log(selectionSort([34, 22, 10, 19, 17]))
// 34, 22, 10, 19, 17
// 10, 22, 34, 19, 17
// 10, 17, 34, 19, 22
// 10, 17, 19, 34, 22
// 10, 17, 19, 22, 34
