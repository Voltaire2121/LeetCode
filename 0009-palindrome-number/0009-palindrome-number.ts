function isPalindrome(x: number): boolean {
  if (x < 0) return false
  if (x < 10) return true
  const stringNumber = x.toString()
  const midIndex = Math.ceil(stringNumber.length / 2)
  for (let i = 0; i < midIndex; i++) {
    if (
      stringNumber.charAt(i) !==
      stringNumber.charAt(stringNumber.length - i - 1)
    )
      return false
  }
  return true
}