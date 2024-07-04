function removeDuplicates(nums: number[]): number {
    let lastSolutionIndex = 0
    let lastSolutionNumber = -100000
    for (let i=0; i<nums.length; i++){
        if (nums[i]>lastSolutionNumber){
            nums[lastSolutionIndex]=nums[i]
            lastSolutionIndex++
            if(nums[i]===nums[i+1]){
                nums[lastSolutionIndex]=nums[i]
                lastSolutionIndex++
            }
            lastSolutionNumber=nums[i]
        }
    }
    return lastSolutionIndex
};