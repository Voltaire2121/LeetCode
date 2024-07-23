function convert(s: string, numRows: number) {
  if (numRows === 1) return s
  const initialArray: string[] = []
  const rowsCount = Math.min(s.length, numRows)
  for (let i = 0; i < rowsCount; i++) initialArray.push(s.charAt(i))
  if (s.length > rowsCount) {
    let verticalIndex = rowsCount - 2
    let isVIMovingUp = rowsCount > 2 ? true : false
    let horizontalIndex = rowsCount
    while (horizontalIndex < s.length) {
      initialArray[verticalIndex] =
        initialArray[verticalIndex] + s.charAt(horizontalIndex)
      if (isVIMovingUp) verticalIndex--
      else verticalIndex++
      if (verticalIndex === 0) isVIMovingUp = false
      if (verticalIndex === rowsCount - 1) isVIMovingUp = true

      horizontalIndex++
    }
  }
  return initialArray.join('')
}
