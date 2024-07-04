/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let mathString = s.replace(/\s/g, "");

  while (hasParenthesis(mathString) !== false) {
    mathString = mergeSigns(mathString);
    let beginEnd = hasParenthesis(mathString);
    let insideParenthesis = mathString.substring(beginEnd[0] + 1, beginEnd[1]);
    let insideParenthesisComputed = resolvePlainText(insideParenthesis);
    mathString =
      mathString.substring(0, beginEnd[0]) +
      insideParenthesisComputed +
      mathString.substring(beginEnd[1] + 1);
  }
  mathString = mergeSigns(mathString);
  return resolvePlainText(mathString);
};

function hasParenthesis(mathString) {
  if (mathString.indexOf("(") < 0) {
    return false;
  } else {
    let lastIndex = mathString.indexOf(")");
    let mathStringReduced = mathString.substring(0, lastIndex + 1);
    let firstIndex = mathStringReduced.lastIndexOf("(");
    return [firstIndex, lastIndex];
  }
}

function mergeSigns(mathString) {
  for (i = 0; i < mathString.length - 1; i++) {
    if (
      (mathString.charAt(i) === "+" || mathString.charAt(i) === "-") &&
      (mathString.charAt(i + 1) === "+" || mathString.charAt(i + 1) === "-")
    ) {
      let signPair = mathString.charAt(i) + mathString.charAt(i + 1);
      let newSign = "";
      switch (signPair) {
        case "++":
        case "--":
          newSign = "+";
          break;
        case "+-":
        case "-+":
          newSign = "-";
          break;
      }
      mathString =
        mathString.substring(0, i) + newSign + mathString.substring(i + 2);
      i--;
    }
  }
  return mathString;
}

function resolvePlainText(plainString) {
  if (plainString.length === 0) {
    return "";
  }
  let answer = 0;
  let newBeggining = 0;
  for (let i = 1; i < plainString.length; i++) {
    if (plainString.charAt(i) === "+" || plainString.charAt(i) === "-") {
      answer = answer + parseInt(plainString.substring(newBeggining, i));
      newBeggining = i;
    }
  }
  answer = answer + parseInt(plainString.substring(newBeggining));
  return answer;
}
