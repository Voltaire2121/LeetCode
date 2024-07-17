function myAtoi(s: string): number {
  s = s.trim()
  let isNegative = false
  if (s.substring(0, 1) === '-') {
    isNegative = true
    s = s.substring(1)
  } else {
    if (s.substring(0, 1) === '+') s = s.substring(1)
  }
  s = removeLeftZeros(s)
  let numberTemp = ''
  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s.substring(i, i + 1)))) break
    numberTemp = numberTemp + s.substring(i, i + 1)
  }
  const finalNumber = isNegative ? -1 : 1
  const answer = parseInt(numberTemp) * finalNumber
  if (answer < -2147483648) return -2147483648
  if (answer > 2147483647) return 2147483647
  return answer
}

const removeLeftZeros = (originalString: string): string => {
  if (isNaN(parseInt(originalString.charAt(0)))) return '0'
  let k
  for (k = 0; k < originalString.length; k++) {
    if (originalString.substring(k, k + 1) !== '0') break
  }
  return originalString.substring(k - 1)
}