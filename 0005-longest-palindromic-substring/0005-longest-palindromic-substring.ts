function longestPalindrome(s: string) {
  const maxLength = s.length
  for (let i = 0; i < maxLength; i++) {
    const gap = maxLength - i
    for (let j = maxLength; j > maxLength - i - 1; j--) {
      const tempString = s.substring(j - gap, j)
      if (isPalindrome(tempString)) return tempString
    }
  }
}

const isPalindrome = (string: string): boolean => {
  if (string.length === 1) return true
  const middle = Math.ceil(string.length)
  for (let p = 0; p < middle; p++) {
    if (string.charAt(p) !== string.charAt(string.length - 1 - p)) return false
  }
  return true
}
