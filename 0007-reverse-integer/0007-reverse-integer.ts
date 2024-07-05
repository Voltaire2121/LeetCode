function reverse(x: number): number {
  if (x===0) return 0
  const numberString = x>0 ? x.toString() : x.toString().substring(1)
  let finalString = x>0 ? '' : '-'
  for (let i = numberString.length; i >= 0; i--){
    finalString += numberString.substring(i, i+1)
  }
  const answer = parseInt(finalString)
  if (answer > 2147483648 || answer<-2147483648) return 0
  return answer
};
