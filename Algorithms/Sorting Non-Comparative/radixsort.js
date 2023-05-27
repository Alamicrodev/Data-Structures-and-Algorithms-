// radix sort is advanced version of counting sort that allows us to sort 
// large range of numbers by taking into account the radix aka the base of the number. 
// basically the length of the array holding the count will be the base/radix. 

// let nums = [2,355,24,100,34,242,500] 
// we have to sort the nums :) 
// it requires two things: 
// 1) nums
// 2) k = range 

function radixSort(nums, k) {
    
    let noSignificantDigits = 0 
    // the copy of range, if not given we will take the maxium value 
    let k_copy = k
    
    // calculating no of signifiacant digits eg for 500 it is 3. 
    while (k_copy != 0) {
        k_copy = k_copy/10
        noSignificantDigits++; 
    }
    
    // we iterate though digits by going through the signicant digits 0 > 1 > 2 
    // notice it will never hit 3 XD because i < noSignificantDigits
    for (let i = 0; i<noSignificantDigits; i++) {
        
        let frequency = []  //an array of base 10 with index positions 0-9 

        // goings thorough each number of unsorted nums array
        for (let numIndex = 0; numIndex<nums.length; numIndex++) {
             
            //we get the digit from that number using the divisor which we make from the i. 
            let divisor = 10*i
            let digit = nums[numIndex]%10
            if (divisor != 0) {
                digit = (Math.floor(nums[numIndex]/divisor))%10
            }
            
            //find the digit in frequency and increase its count. 
            if (frequency[digit]) {
                frequency[digit]++;
            }
            else {
                frequency[digit] = 1
            }
        }
           
        //re-arrangeing frequency array to reflect the index positions for each number
        //if you don't understand you must read the counting sort first  
        for (let i =0; i<frequency.length; i++) {
            if (!frequency[i]) {
                 frequency[i] = 0 
            }
            if (i == 0) {
                continue; 
            }
           frequency[i] = frequency[i]+frequency[i-1]
        }
          
        // new sorted array of length same as nums
        let nums_sorted = []

        // going through each element of nums from last to first
        for (let numIndex = nums.length-1; numIndex >= 0; numIndex--) {
            // again we find the digit
            let divisor = 10*i
            let digit = nums[numIndex]%10
            if (divisor != 0) {
                digit = (Math.floor(nums[numIndex]/divisor))%10
            }

            //from the frequency we find the index position to put it in using the digit key.
            //we have to subtract one because otherwise the first index position 0 will not be filled.  
            nums_sorted[frequency[digit]-1] = nums[numIndex]
            frequency[digit]--; 
        }
        
       //we update nums     
       nums = nums_sorted

    }
    
    // the loop comes to end with final value of nums being fully sorted
    return nums 
}

// Time Complexity: 
// 1) calculating num of significant digits = O(c)
// 2) Loop going through digits = O(d+c)
// 3.5) We can only keep the bigger one thus O(d)

// 3) Loop going through each element in nums twice = O(2n)
// 4) Loop going through frequency = O(2n + k)
// 5) We can only keep the bigger one and remove the multipliers so O(n)
// => O(d(n))
// again d becomes just a multiplier and its not another n to make it n^2. 
// so => O(n)


console.log(radixSort([2,355,24,100,34,242,500], 500))

