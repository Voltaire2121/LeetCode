function fullJustify(words: string[], maxWidth: number) {
  let finalArray: string[] = []
  while (words.length > 0) {
    const { nextLine, isFinal } = getNextLine(words, maxWidth)
    const nextLineEvolved = isFinal
      ? nextLine + ' '.repeat(maxWidth - nextLine.length)
      : addSpaces(nextLine, maxWidth)
    words = words.slice(nextLine.split(' ').length)
    finalArray.push(nextLineEvolved)
  }
  return finalArray
}

const getNextLine = (
  words: string[],
  maxWidth: number
): { nextLine: string; isFinal: boolean } => {
  let returnText = words[0]
  let i = 0
  for (i = 1; i < words.length; i++) {
    let auxiliarText = returnText + ' ' + words[i]
    if (auxiliarText.length > maxWidth)
      return { nextLine: returnText, isFinal: false }
    returnText = auxiliarText
  }
  return { nextLine: returnText, isFinal: true }
}

const addSpaces = (lineText: string, maxWidth: number) => {
  let wordsArray = lineText.split(' ')
  console.log(wordsArray)
  if (wordsArray.length === 1)
    return lineText + ' '.repeat(maxWidth - lineText.length)
  let spacesCount = wordsArray.length - 1
  const missingSpaces = maxWidth - lineText.length
  const newRegularSpaces = Math.floor(missingSpaces / spacesCount)
  const extraNeededSpaces = missingSpaces - spacesCount * newRegularSpaces
  let returnText = wordsArray[0]
  for (let i = 1; i < wordsArray.length; i++) {
    returnText =
      returnText +
      (i <= extraNeededSpaces
        ? ' '.repeat(newRegularSpaces + 2)
        : ' '.repeat(newRegularSpaces + 1)) +
      wordsArray[i]
  }
  return returnText
}