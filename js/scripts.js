// Business Logic
var arrayOfNumbers1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var arrayOfExceptions = ["Beep!","Boop!","Sorry, I cannot do that!", "Invalid Number!"];
var emptyArray = [];

function makeAstringOfNummbers(number) {
  for (var i = 0; i < arrayOfNumbers1.length; i ++);
    if (number > 0 && number < arrayOfNumbers1.length) {
      if (number % 3 === 0) {
        emptyArray.push(arrayOfExceptions[2])
      }else if (number === 0 || number % 10 === 0) {
        emptyArray.push(arrayOfExceptions[1])
      }
    }
return emptyArray;
};



// User Interface

$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();

  var inputNumber = parseInt($("#numberInput").val());
  // console.log(originalUserInput);

  var resultToShowUser = makeAstringOfNummbers(inputNumber);
console.log(resultToShowUser);

  });
});
