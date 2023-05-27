// Counting Sort is a non-comparative sorting algorithm. 
// It has a linear time-complexity O(n)
// This meakes it faster than almost all the comparative algorithms. 

// It requires two things to function. 
// 1. The array/objects to be sorted.          [2,4,5,3,2,1] 
// 2. The range of elements inside that array. k = 5 (at max 5)


function countingSort(nums, k) {
    // example nums = [2,4,5,3,2,1] 

    let frequency = []    //an array of length k 
    // note: in js we don't really need n as length is auto done by the language
    

    // looping throught the nums 
    // and counting each number by storing its count in the index_position(key from nums) of frequency.  
    for (let i = 0; i< nums.length; i++) {
       if(frequency[nums[i]]){
        frequency[nums[i]]++;
       }
       else {
        frequency[nums[i]] = 1; 
       }
    }
     
    //                 0       1  2  3  4  5      6
    // frequency = [undefined, 1, 2, 1, 1, 1, undefined]
    // at this point this is how frequency array looks like. 
    // look at index 2 suppose you reach this point and have to input two 2s,
    // at this point we will need two create a loop that goes through it until it hits 0.
    // that is not good, is not it better that we already have index positions set. 

    for (let i = 0; i<frequency.length; i++) {
        if(!frequency[i]) {
            frequency[i] = 0
        }
        if (i == 0) {
            continue; 
        }
        
        frequency[i] = frequency[i]+frequency[i-1]

    } 
 
    //              0  1  2  3  4  5  6
    // frequency = [0, 1, 3, 4, 5, 6, 6]
    // new frequency values 

    let sortedArray = []     // new sorted array with the same length as unsorted array.

    // from last to first 
    for (let i = nums.length-1; i>=0; i--) {
        
        // we go through each element and find its index from frequency. 
        sortedArray[frequency[nums[i]]-1] = nums[i]; 
        // decrementing the index position in frequency for next time the same number comes, we have a new index position for it. 
        frequency[nums[i]]--; 
    }

    // sortedarray = [1,2,2,3,4,5]

    return sortedArray 

}

// Time complexity = O(n+k+n) => O(n)
// Space complexity = O(n) 
// can you think of how we can use counting sort to sort single alphabets?

console.log(countingSort([2,4,5,3,2,1], 5))

// The problem with counting sort starts when the range starts getting really big. 
// or we do not have any range at all. 
// yes you can you Math.max() to find the maximum value and use it as range.
// Math.max() itself is O(n) so it increases one more iteration in the loop.   
// but there still will be a problem when range gets too big so it takes so much space. 
// we try an solve this problem usign radix sort.
