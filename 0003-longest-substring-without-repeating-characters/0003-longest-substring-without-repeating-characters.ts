function lengthOfLongestSubstring(s: string): number {
  if (s.length===0 ) return 0
  let longestSubstring = 1;
  for (let i = 0; i < s.length; i++){
    for (let j = i; j < s.length; j++){
      let stringTemp = s.substring(i, j+1)
      if (stringTemp.length > longestSubstring) longestSubstring = stringTemp.length
      if (stringTemp.includes(s.substring(j+1, j + 2))) break
    }
  }
    return longestSubstring
};