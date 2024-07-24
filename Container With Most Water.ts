function maxArea(height: number[]): number {
  let maxWater = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i; j < height.length; j++) {
      const areatemp = Math.min(height[j], height[i]) * (j - i);
      if (areatemp > maxWater) {
        maxWater = areatemp;
      }
    }
  }
  return maxWater;
}

console.log(maxArea([1, 1]));
