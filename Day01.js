//  Question-1 Fibonacci Sequence
// give a number n find the first n elements of fibonacci sequence


// In mathmatics the fibonacci sequence is a sequence in which each number is the sum of the two preceding once
// ex fibonacci(2) = [0,1]
//  fibonacci(3) = [0, 1, 1]
// fibonacci(4) = [0, 1, 1, 2]
// fibonacci(5) = [0, 1, 1, 2, 3]

function fibonacci(n){
    const fib = [0, 1]
    for(let i = 2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(7))
console.log(fibonacci(8))



// Question-2 factorial Of a number
//   give a integer n and  find the factorial of integer number

// 4! = 4*3*2*1 
// 5! = 5*3*2*1

function findFactorial(n){

    let res = 1;
    for(let i = n; i>0 ; i--){
        if(n===1 || n===0){
            return res
        }else{
            res = res*i
        }
    }
return res
}

// console.log(findFactorial(0))
// console.log(findFactorial(1))
console.log(findFactorial(5))
// console.log(findFactorial(10))
// console.log(findFactorial(20))





//  Question - 3 Give a prime number n determine if the number is prime or not

// isPrime(5) = true

function isPeime(n){
    if(n<2){
        return false
    }
    for(let i = 2;i<n;i++){
        if(n%i===0){
            return false
        }
    }
    return true
}
console.log(isPeime(9))
// console.log(isPeime(0))
// console.log(isPeime(1))
// console.log(isPeime(2))