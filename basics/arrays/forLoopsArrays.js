// its called for-of loop

let nums = []

nums[0] = 1;
nums[99] = 9;

// console.log(nums); => [1, <98 empty items>, 9] but the length is still 100

// for(let s of nums){
//     console.log(s);
// }

// for-in only fetches the key of the property. So this will only return 0, 99 which are the indicies which function as keys in arrays
// for(let s in nums){
//     console.log(s);
// }

