// Ques --->>>> Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input :[-2,1,-3,4,-1,2,1,-5,4] --->>>> Output:6, [4,-1,2,1]
// Input: [5,4,-1,7,8]   ---->>>> Output:23, [5,4,-1,7,8]



//  Brute force Approach

function maxSubArraySum(nums){
    let maxSum = nums[0]
    let startIdx = 0;
    let endIdx = 0

    for(let i = 0; i<nums.length; i++){
        let currentSum = 0;
        for(let j = i; j<nums.length;j++){
            currentSum = currentSum+nums[j]
            if(currentSum>maxSum){
                maxSum = currentSum;
                startIdx = i;
                endIdx = j;
            }
        }
      
    }
     return {
        sum: maxSum,
        subArra : nums.slice(startIdx, endIdx+1)
     }
}
// console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4]))


//  ----->>>> Kadanes's Algorithm

function maxSumKadane(nums){
    let sum = 0;
    let max = nums[0];
    for (let i = 0; i<nums.length; i++){
        sum+=nums[i];
        if(sum>max){
            max = sum
        }
        if(sum<0){
            sum = 0;
        }
    }
    return max
}

console.log(maxSumKadane([-2,-3,-1,-5]))

