// const data = [4, 2, 1]

// const getTotal = data.reduce((total, item)=>{
//         return total+=item*2          
// },0)

// console.log(getTotal)

// Question 1- Palindorome Number
// exm 121 output : true
// 10 output : false

const isPalindorm = function(x){
        // if(x === +x.toString().split("").reverse().join("")){
        //         return true
        // }else{
        //         return false
        // }

        // or 

   return x === +x.toString().split("").reverse().join('')

}
// const res = isPalindorm(121)
// console.log(res)


// Question -2 fib no
 // exm 0,1,1,2,3,5,8,13,21.....
//  f(n) = f(n-1)+f(n-2) ,n>1

const fib = function(n){
        const arr = [0,1]
        for(let i=2; i<=n; i++){
                arr.push(arr[i-1]+arr[i-2])
        }
        console.log(arr)
}
// fib(4)

// Ques-3 Valid Anagram 
// An Anagram is a word or phrase formed by rearranging the latter of a different word or phrase, using all the original latters exactly once.

//Input :(s="anagram"), (t="nagram"); --->>>>>> Out: true
//Input :(s="rat"), (t="car"); --->>>>>> Out: false




const isAnagram = function(s, t){
      s = s.split("").sort().join("")
      t = t.split("").sort().join("")
      return s===t
}

// console.log(isAnagram('anagram', 'ganaram'))

// s = anagram => ['a','n','a','g','r','a','m'] =>[a,a,a,g,m,r]=>aaagmr

// t = nagaram =>[n,a,g,a,r,a,m]=> aaagmnr



// Count The Container in array


function countContainer(){
        const arr = [4,3,2,1,2,3,4]

        let count = 0;

        const mid = Math.floor((0+arr.length)/2)
        // console.log(mid)

        for(let i = 0; i<mid; i++){
                if(arr[i] -arr[mid] === arr[i+1]){
                        count+=arr[i+1]
                }
                //  else if(arr[arr.length-1-]-arr[mid] === arr[arr.length-2]){
                //        count+=arr[arr.length-2]
                // }
                
        }
        for(let i = arr.length-1; i>mid; i--){
                if(arr[i]-arr[mid] === arr[i-1]){
                        count+=arr[i-1]
                }
        }
   console.log(count)
}
// countContainer()



// question Two Sum
// given an array of integers nums and an integer target return indices of two num bers such taht they add up to target. 

// input : nums =[2,7,11,15]. target = 9 
// output: [0,1]
// input :[ 3,2,4], target = 6
// output : [1,2]

// Brute force solution 

const twoSum = function(nums, target){
        for (let i = 0; i<nums.length; i++){
                for(let j = i+1; j<nums.length; j++){
                        if(nums[i]+nums[j]=== target){
                                return [i, j]
                        }
                }
        }
}
// console.log(twoSum([3,2,4], 6));


// question 5 - Best Time to Buy and sell stockes

// you are given an array prices where  prices[i] is the price of a given stock on ith day.

// you want to maximize your profit by choosing a single day to buy one stock and choosing a diffrent day in the future to sell that stockes.

// return the maximum profit, if you cannot achive any profit , return 0.

// Input : prices = [7, 1, 5, 3, 6, 4]l ------>>>> Output:5;
// Input : prices = [7, 6, 4, 3, 1]l ------>>>> Output:0;


function maxProfit(prices){
    let globalProfit = 0;

    for(let i = 0; i<prices.length-1; i++){
        for(let j = i+1; j<prices.length; j++){
                const currentMaxProfit = prices[j] - prices[i]
                if(currentMaxProfit > globalProfit){
                        globalProfit = currentMaxProfit
                }
        }
    }
    return globalProfit;
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([7, 6, 4, 3, 1]))


// gredey solution 

function maxProfit(prices){
        let minStockPurchasePrices = prices[0];
        let profit = 0;
        for(let i = 1; i<prices.length; i++){
                if(prices[i]<minStockPurchasePrices){
                        minStockPurchasePrices = prices[i];
                }
            profit = Math.max(profit, prices[i]-minStockPurchasePrices)
        }
        return profit
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([7, 6, 4, 3, 1]))
