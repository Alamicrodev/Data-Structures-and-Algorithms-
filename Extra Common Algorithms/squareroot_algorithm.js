// This is an algorithm that allows us to find the squareroot of a number 
// We know that for any squareroot, let's take 3 for example which is sqrt of 9
// 0.5*(3 + (9/3)) == 3                       
// 3 here must be the root otherwise the equation will never return true
// We keep lowering the root until we find the root value 

let mySqrt = function(x) {
    if (x==0) {
        return 0
    }
    let root = x 
    try {
        while (0.5*(root + (x/root)) != root) {
            root = 0.5*(root + (x/root))
        }
        return root 
    }
    catch (err) {
        return 0
    }
}