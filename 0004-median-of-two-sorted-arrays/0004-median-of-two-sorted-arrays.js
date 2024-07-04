/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let newArray = nums1.concat(nums2);
  newArray.sort((a, b) => a - b);
  if (newArray.length % 2 === 0) {
    return (
      (newArray[newArray.length / 2] + newArray[newArray.length / 2 - 1]) / 2
    );
  } else {
    return newArray[Math.ceil(newArray.length / 2) - 1];
  }
};