// This is an algorithm to check if a number is prime. 

// There are various times in programming when we have
// to check whether a number is a prime or not, and
// that is when this algorithm comes in handy.

function isPrime(num){
    if (num < 2) return false;
    if(num % 2 == 0 && num != 2) return false;
    let squareRoot = Math.sqrt(num)
    for(var i = 3; i <= squareRoot; i += 2) {
      if(num % i == 0) return false;
    }
    return true;
  }


  console.log(isPrime(2))