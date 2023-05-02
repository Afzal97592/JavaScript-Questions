// Arrays- Add and Remove the Elements
 let arr = ['Apple', 'Banana', 'Cherry']
 arr.push('orange')
//  console.log(arr) // so push Add the element in last

 // for remove 
arr.pop()
// console.log(arr)  Remove the last elemts from array


// Add to top the array
arr.unshift("orange");
// console.log(arr) will add the element in the begning of the array

arr.shift()
// console.log(arr) will remove the element from the begning of thr array


// ----->>>> LOOPING

for(let i = 0; i<arr.length;i++){
    // console.log(arr[i])
}
let i =0
while(i<arr.length){
    // console.log(arr[i])
    i++
}

// Inbuilt Loop Methods

const numbers = [1,2,3,4,5];
numbers.map((item, i , arr)=>{
        //  console.log(item*2)
})

// Filters

const newNums = numbers.filter((item)=>{
    return item>3
})

// console.log(newNums)


// reduce

const newNums2 = numbers.reduce((prev,item )=>{
    return prev+item*2
},1)
// console.log(newNums2)

// some in javascript

const res = numbers.some((item)=>{
    return item>3
})
// console.log(res)  same as filter but filter return the value and some returns the true or false

const resEvery = numbers.every((item)=>{
    return item>3
})
// console.log(resEvery) if every elements of arr is satisfying the conditon then will return true else will return the false

const resFind = numbers.find((item)=>{
    return item<4
})
// console.log(resFind) find return the first element of array if condition satisfied



//   ----->>>> Spread and Rest Oprators in Array

// Spread Oprators

const nums = [1,2,3];
const nums2 = [4,5,6,7];
const finalNums = [...nums, ...nums2]
// console.log(finalNums)   so sprade operators used to concate the two or more arrays into single array.


//  --->>> Rest Operators

function sum(numbers){
    return numbers
}
// console.log(sum(nums, nums2)) it will take only first perameters as an argument

//  Rest Operators now comes in a picture
function sum(...numbers){
    
     return numbers
}
// console.log(sum(...nums, ...nums2))


// more Arrays Methods

//  concat

const  newArr  = nums.concat(nums2, numbers)
// console.log(newArr) 

// --->>> slice
// const newRes = arr.slice(0,2)
const newRes = arr.slice(-2)
// console.log(newRes)
//  Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

//  index 0 --> will return
//  index 2 --> will not return this will return the last last Index of defined index of array. means [5,4,3,2] slice(0,2) =>[5,4] not [5,4,3]



// ---->>> splice

const newSpliceRes = arr.splice(0,2,'orange')
// console.log(newSpliceRes)
// console.log(arr)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @param items — Elements to insert into the array in place of the deleted elements.

// @returns — An array containing the elements that were deleted.


//  ----->>>> fill Method in array
const dummy = [2,4,6,7]
 dummy.fill(1)
 dummy.fill(0)
//  console.log(dummy)


// Changes all array elements from start to end index to a static value and returns the modified array

// @param value — value to fill array section with

// @param start
// index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.

// @param end
// index to stop filling the array at. If end is negative, it is treated as length+end.


//  ----->>>>>> findIndedx Mthod

const index = nums.findIndex((item)=>item === 2)
// console.log(index)

// Returns the index of the first element in the array where predicate is true, and -1 otherwise.

// @param predicate
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.

// @param thisArg
// If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.



// ----->>>> Flat

 const array = [1,[2,3], [[4,5],6]] 
//   [1,2,3,4,5,6]
const falattenArr = array.flat(2)
// console.log(falattenArr)


// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// @param depth — The maximum recursion depth


// reverse

nums.reverse()
// console.log(nums)
// Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

// ----->>> sort the array

const unsortedarr = [5,4,1,9,3,0,-10]
unsortedarr.sort((a,b)=>b-a)
unsortedarr.sort((a,b)=>a-b)
// console.log(unsortedarr)

// Sorts an array in place. This method mutates the array and returns a reference to the same array.

// @param compareFn
// Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

// [11,2,22,1].sort((a, b) => a - b)


//  DSA 

//  ---->>> Ques-1 - second largest number in the array
//  Input : [12, 35, 1, 10, 34, 1] --->>> OUtput : 34
//  Input : [10, 5, 10] ---->>> output : 5


function secondLargestNum(arrNums){
    const sorted = arrNums.sort((a,b)=>a-b)
    //  O(nlogn)
//    const uniqueArr = new Set([...sorted]) it will return the object of set so

const uniqueArr = Array.from(new Set(sorted))
// O(n)
// Creates an array from an iterable object.
// @param iterable — An iterable object to convert to an array.

   return arrNums[uniqueArr.length-2]
}
//  console.log(secondLargestNum([10, 5, 10,15,14,15]))

// TC : O(nlogn)

// other approch


function secondLargestNum(arrNums){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    for(let i = 0; i<arrNums.length; i++){
        if(arrNums[i]>largest){
            secondLargest = largest;
            largest = arrNums[i]
        }else if (arrNums[i] != largest && arrNums[i]>secondLargest){
           secondLargest = arrNums[i]
        }
    }
    return secondLargest
}

// console.log(secondLargestNum([10, 5, 10,15,14,15]))
//  TC : O(n)
// SC :O(1)



// --->>>> Ques-2 Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non negative.

// Input : [1,2,3,4,5,6,7], k=3 ---->>> Output:[5,6,7,1,2,3,4]
// Input : [-1,-100,3,99], k=2 ---->>> Output:[3,99.-1,-100]

function rotateArray(nums, k){
    let size = nums.length;

    if(size>k){
        k = k%size
        // means if K for this arr [1,2,3,4,5,6,7] is 10 and length of aaray is 8 so after 8 rotation array look like exact same  8 rotation dose not make any sence 10%8 ==> 2 then it will rotate only 2 
    }

    const rotate = nums.splice(size-k, size); // so splice return the remove elements means 8-3 = 5, 8 so it will start from index 5 and remove all elements after index of 5 ex [1,2,3,4,5,6,7] so it will remove from [5,6,7]
    nums.unshift(...rotate)
    return nums
}
// console.log(rotateArray([1,2,3,4,5,6,7], 3))

// TC : O(n) + O(n)


//  methos 2

function optimsedRotateArray(nums, k){
    let size = nums.length;
    if(k>size){
        k = k%size
    }

    //  Step-1 first reverse the arr
    // [1,2,3,4,5,6,7] => [7,6,5,4,3,2,1]
    // step-2 if k =3 then reverse starting three elements [5,6,7,4,3,2,1]
// Step-3 then reverse last three elements [5,6,7,1,2,3,4]

reverse(nums, 0, nums.length-1); // Step-1
reverse(nums, 0, k-1); // step-2
reverse(nums, k, nums.length-1); // step-3
return nums
}

function reverse(nums, left, right){
    while(left<right){
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp

        left++
        right--
    }
    
}
// console.log(optimsedRotateArray([1,2,3,4,5,6,7], 3))
// TC-O(n);

// ---->>> Ques - 3 Remove Duplicates from sorted array

// Input:[1,1,2] ----->>>> Output: 2, [1,2]
// INput:[0,0,1,1,2,2,3,3,4] --->>> Output:5, [0,1,2,3,4]

function removeDuplicate(nums){
    let newArr = Array.from(new Set(nums))
    return newArr
}
// console.log(removeDuplicate([0,0,1,1,2,2,3,3,4]))

function removeDuplicatesElements(nums){
    for (let i = 0; i < nums.length-1; i++) {
      if(nums[i]===nums[i+1]){
        nums.splice(i+1, 1);
        i--;
      }
        
    }
    return nums
}
// console.log(removeDuplicatesElements([0,0,1,1,1,2,2,2,3,3,4]))

//  Withput js Methods

function removeDuplicatesNew(nums){
    if (nums.length === 0) return 0;
    let i = 0;
    for(let j = 1; j<nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i+1
}
// console.log(removeDuplicatesNew([0,0,1,1,2,2,3,3,4]))





//  ===>>> Leet Code Question

// ------>>> Question Moves Zeros to end
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


//  Approach - 1 Brute force

function moveZeroes(nums) {
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] === 0) {
                 let temp = nums[i];
                 nums[i] = nums[j];
                 nums[j] = temp
            }
        }
    }
    return nums
};

// console.log(moveZeroes([0,1,0,3,12]))



// ----->>> Leet Code Question


// Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

// Return the maximum difference. If no such i and j exists, return -1.

// Example 1:

// Input: nums = [7,1,5,4]
// Output: 4
// Explanation:
// The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
// Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.
// Example 2:

// Input: nums = [9,4,3,2]
// Output: -1
// Explanation:
// There is no i and j such that i < j and nums[i] < nums[j].
// Example 3:

// Input: nums = [1,5,2,10]
// Output: 9
// Explanation:
// The maximum difference occurs with i = 0 and j = 3, nums[j] - nums[i] = 10 - 1 = 9.

function maximumDifference(nums) {
    let maxDiff = -1;
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]<nums[j]){
               if(maxDiff < nums[j]-nums[i]){
                maxDiff = nums[j]-nums[i]
               }
            }
        }
    }
   return maxDiff 
};
// console.log(maximumDifference([1,5,2,10]))



// --->>> Leet Code Question 

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true



// ---->>> Brute force Approach

 function containsDuplicate(nums) {
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]=== nums[j]){
                return true
            }
        }
    }
    return false 
};
// console.log(containsDuplicate([1,2,3,1]))



 function intersection(nums1, nums2) {

    let result = []

    for(let i = 0; i<nums1.length; i++){
        for (let j = 0; j<nums2.length; j++){
            if(nums1[i] === nums2[j]){
                  result.push(nums1[i])
            }
        }
    }
    return Array.from(new Set(result))
};
// console.log(intersection([4,9,5], [9,4,9,8,4]))


 function reverse(x) {
      let result = 0; 
      const limit = 2**31; // integer limit
      const isNegative = x<0
      x = Math.abs(x)
    //   console.log(x)

 while(x>0){
        result = (result*10)+x%10;
        x = Math.floor(x/10);
     }
     if(result > (limit-1) || result< (-limit)){
        return 0
     }else{
        if(isNegative){
           return -result
        }else{
           return result
        }
     }

}

console.log(reverse(-123))
// reverse(-123)
// console.log(Math.abs(-123))

