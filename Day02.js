// Question-1 Give a problem integer 'n' determine the number is a power of 2 or not 
// An integer is a power of two if there exists an integer 'x' such that 'n' === 2 the power x

// Ex isPowerOfTwo(1) = true(2^0)
// Ex isPowerOfTwo(2) = true(2^1)
// Ex isPowerOfTwo(5) = false



function isPowerOfTwo(n){
   if(n<1){
    return false
   }
   while(n>1){
    if(n%2 !== 0){
        return false
    }
    n = n/2
   }
   return true
}
console.log(isPowerOfTwo(0))
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(5))

