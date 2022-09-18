/////////////////////////////////////////////////////////////
// 1. Understand the problem:
// The function takes in 2 arrays
// and make sure that for each of the values in the first array, thre's also  a value in the 2nd array
// so for each x in arr1 we need to have x^2 in arr2
// The number of occurences needs to match as well

/////////////////////////////////////////////////////////////
// 2. Explore examples:
// [2, 3], [4, 9] ==> true
// [2], [4, 10] ==> false? should we check if the num of elementts is the same?
// [5], [] => false
// ["a", 8], ["a", 56] ==> false. Can we assume the arrays only contain nums, or do we need to check each element?

/////////////////////////////////////////////////////////////
// 3. Break it down (pseudocode):
/* same(arr1, arr2)
IF arr1.length !== arr2.length ==> return
ELSE init new objects freq1 and freq2.
for each el in arr1, push el^2 into freq1 using the "frequency counter" pattern
EX: arr1 = [2, 3] ==> ferq1 = {4:1, 9:1}
do the same for arr2 but without changing the values
EX: arr2 = [4, 9] ==> ferq2 = {4:1, 9:1}
compare the objects and return true / false
*/

/////////////////////////////////////////////////////////////
// 4. Solve or simplify if not able to produce full solution:

/////////////////////////////////////////////////////////////
// 5. Refactor