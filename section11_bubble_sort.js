//////////////////////////////////////////////////////////////////////////////////////////////
// Bubble Sort:
// ------------
// General idea - compare 2 idxs and keep moving lower vals down
// 2 loops. Loop 1 iterates from start to end and then end - 1 each time
// Loop 2 iterated from start to currrent end (i) - 1
// We compare objects within the internal loop and swap if el in pos j is greater than j + 1
// Break out if no swaps occured ==> array is sorted

// Big O time complexity:   O(n^2)
// ------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////
const bubbleSort = (arr) => {
    let  noSwapsOnLastIteration
    for(var i = arr.length; i > 0; i--){
        noSwapsOnLastIteration = true
        for(var j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                var tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
                noSwapsOnLastIteration = false      
            }
        }
        if(noSwapsOnLastIteration) break
    }
    return arr
  }