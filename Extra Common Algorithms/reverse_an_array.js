// This simple algorithm allows you to reverse an array or a string when needed
// This is called two pointers technique/algorithm


var reverseString = function(s) {

    let start = 0
    let end = s.length-1 

    while(start < end && start != end) {
          [s[start], s[end]] = [s[end], s[start]]
          start++; 
          end--; 
    }

};