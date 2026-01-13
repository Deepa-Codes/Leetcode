var twoSum = function(nums, target) {
let sum
    for(let i=0; i<nums.length-1; i++){
        for (let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j]==target) return [i,j]
        }
     }
};

// twoSum([2,11,7,15], 9)
// console.log('twoSum', twoSum([0,2,3,7,3], 9));
