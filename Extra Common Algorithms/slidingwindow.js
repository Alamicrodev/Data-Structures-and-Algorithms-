// Sliding Window Algorithm 
// In Sliding Window Algorthm you can imagine the array as the back and 
// some pointers being used to be slid on top of it for some purose. 
// let array = [5,9,|6,2,5|,2,6,7]

//find the sum of all subarrays of length k in an array.

let array = [5,9,6,2,5,2,6,7]
let k = 3
let allSums = []

function slidingWindow(array, k) {
    let start = 0 
    let end = k-1
    let sum = 0
    
    // add the initial sum
    for (let i = start; i <= end; i++) {
        sum += array[i]
    }
    allSums.push(sum)

    while (end < array.length-1) {
        sum = sum-array[start]
        start++; 
        end++; 
        sum = sum+array[end]
        allSums.push(sum)
    }

}

slidingWindow(array, 3)
console.log(allSums)