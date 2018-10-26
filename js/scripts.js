// // Business Logic
// var arrayOfNumbers1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, ];
// var arrayOfExceptions = ["Beep!","Boop!","Sorry, I cannot do that!", "Invalid Number!"];
// var arrya1 = [1]
// var emptyArray = [];
//
// function makeAstringOfNummbers(number) {
//   for (var i = 0; i < arrayOfNumbers1.length; i ++);
//     if (number > 0 && number < arrayOfNumbers1.length) {
//       if (number % 3 === 0) {
//         emptyArray.push(arrayOfExceptions[2])
//       } else if (number === 0 || number % 10 === 0) {
//         emptyArray.push(arrayOfExceptions[1])
//       } else if ()
//     }
// return emptyArray;
// };

function 



function convertNumberToArray(number) { //number is inputNumber as argument
  if (number < 0 || number > 100) {
    alert("Invalid Number: returning 10");
    number = 10;
  }
  var arrayOfNumbers = new Array(number);
  var count = 0; //each empty space receives count
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    arrayOfNumbers[i] = count;
    count += 1;
  }
  return arrayOfNumbers;
}




// User Interface

$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();

  var inputNumber = parseInt($("#numberInput").val());
  var convertedArray = convertNumberToArray(inputNumber);
  // conertedArray is the array of numbers, up to userInput #
  // console.log(originalUserInput);

  var resultToShowUser = makeAstringOfNummbers(inputNumber);
console.log(resultToShowUser);

  });
});
