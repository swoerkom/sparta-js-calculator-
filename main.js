
var calculator_choice = prompt("What calculator do you want to use, (b)asic and (a)dvanced?");
if (calculator_choice.toLowerCase() == "b") {
  var firstNumber = parseInt(prompt("What is the first number to operate on?"));
  var secondNumber = parseInt(prompt("What is the second number to operate on?"));
  var operation = prompt("Do you want to * / - or + the numbers?")

  if (operation === "*") {
    var answer = firstNumber * secondNumber;
  } if (operation === "/") {
    var answer = firstNumber / secondNumber;
  } if (operation === "+") {
    var answer = firstNumber + secondNumber;
  } if (operation ==="-") {
    var answer = firstNumber - secondNumber;
  }
}
  else if (calculator_choice.toLowerCase() == "a") {
    var number = parseInt(prompt("What is the number you want to operate on?"));
    var operation = prompt("Do you want to square root (1) or find the power of (2)?");

    if (operation === "1") {
      var answer = Math.sqrt(number);

    } if (operation ==="2") {
      var answer = Math.pow(number, number);
    }
}
alert(answer);
