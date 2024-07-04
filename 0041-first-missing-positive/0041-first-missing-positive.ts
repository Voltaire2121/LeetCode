function firstMissingPositive(nums: number[]): number  {
    let supportArray: number[] = []
  for (let i = 0; i < nums.length; i++){
    if (nums[i]<1) continue
    let index= nums [i]
    supportArray[index]=1
  }
  if (supportArray.length===0) return 1
  for (let j = 1; j < supportArray.length; j++){
    if (supportArray[j] !== 1) return j
  }
    return supportArray.length
};
