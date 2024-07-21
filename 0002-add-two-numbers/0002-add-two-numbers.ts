function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
  let array1: string = ''
  let array2: string = ''
  let current1 = l1
  let current2 = l2
  while (current1 !== null || current2 !== null) {
    if (current1 && current1?.val !== null)
      array1 = current1.val.toString() + array1
    if (current2 && current2?.val !== null)
      array2 = current2.val.toString() + array2
    current1 = current1?.next || null
    current2 = current2?.next || null
  }
  console.log(array1, array2)
  const sum = BigInt(array1) + BigInt(array2)
  console.log('sum: ' + sum)
  const reverseSum = sum.toString().split('').reverse().join('')
  const answer = createLinkedListFromString(reverseSum)

  return answer
}

function createLinkedListFromString(string: string): ListNode | null {
  if (string.length === 0) return null
  if (string.length === 1) return new ListNode(parseInt(string.charAt(0)), null)
  let head = new ListNode(parseInt(string.charAt(0)))
  let current = head
  for (let i = 1; i < string.length; i++) {
    current.next = new ListNode(parseInt(string.charAt(i)))
    current = current.next
  }
  return head
}