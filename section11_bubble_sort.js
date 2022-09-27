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