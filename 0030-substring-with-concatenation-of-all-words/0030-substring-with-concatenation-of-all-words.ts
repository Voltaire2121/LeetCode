function findSubstring(s: string, words: string[]): number[] {
  const wordsLenght = words[0].length
  const wordsQuantity = words.length
  const checkedWords: string[] = []
  const answerArray: number[] = []
  for (let i = 0; i <= s.length - (wordsQuantity*wordsLenght); i++){
    if (words.includes(s.substring(i, i + wordsLenght))) {
      const wordTemp = s.substring(i, i + (wordsLenght * wordsQuantity))
      if (checkedWords.includes(wordTemp)) {
        answerArray.push(i)
        continue
      }
      if (isConcatenation(wordTemp, words, wordsLenght)) {
        answerArray.push(i)
        checkedWords.push(s.substring(i, i + (wordsLenght * wordsQuantity)))
      }
    }
  }
  return answerArray
};

const isConcatenation = (string: string, words: string[], wordsLenght: number): boolean => {
  console.log('checking this word: ', string)
  const helperArray = [...words]
  for (let i = 0; i < string.length; i = i + wordsLenght){
    const stringTemp = string.substring(i, i + wordsLenght)
    const stringTempIndex = helperArray.indexOf(stringTemp)
    if (stringTempIndex !== -1) {
      helperArray.splice(stringTempIndex, 1)
    }
  }
  if (helperArray.length===0) return true
  return false
}