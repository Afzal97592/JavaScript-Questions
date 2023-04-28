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

console.log(secondLargestNum([10, 5, 10,15,14,15]))

