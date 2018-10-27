// // Business Logic
// var arrayOfNumbers1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, ];
// var arrayOfExceptions = ["Beep!","Boop!","Sorry, I cannot do that!", "Invalid Number!"];
// var arrya1 = [1]
// var emptyArray = [];
//
// function makeArrayWithExceptions(arrayOfNumbers) {
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
var onesNumbers = [/[1]/];

function beep(array) { //argument will be arrayOfNumbers
  var beepArray = array;
  for (var i = 0; i < beepArray.length; i++) {
    if (i % 10 === 0 || i === 0) {
      beepArray[i] = " Beep! ";
    }
  }
  return beepArray;
}

function sorry(array) {
  var sorryArray = array;
  for (var i = 0; i < sorryArray.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      sorryArray[i] = " I'm sorry, Dave. I'm afraid I can't do that. ";
    }
  }
  return sorryArray;
}

// function boop(array) {
//   var boopArray = array;
//   for (var i = 0; i < boopArray.length; i++) {
//     if (onesNumbers.includes(boopArray[i])) {
//       boopArray[i] = " Boop! ";
//     }
//   }
//   return boopArray;
// }

function convertNumberToArray(number) { //number is inputNumber as argument
  if (number < 0 || number > 100) {
    alert("Invalid Number: returning 10");
    number = 10;
  }
  var arrayOfNumbers = new Array(number + 1); //new Array() creates array with empty spaces to fill
  var count = 0; //each empty space receives count
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    arrayOfNumbers[i] = count;
    count += 1;
  }
  return arrayOfNumbers; //array with numbers in each empty space, up to # of inputNumber;
}


// User Interface

$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();


    var inputNumber = parseInt($("#numberInput").val());
    // console.log(inputNumber);
    var convertedArray = convertNumberToArray(inputNumber);
    // console.log(convertedArray);

    var beepTest = beep(convertedArray);
    // console.log(beepTest);

    var sorryTest = sorry(beepTest);

    // var sorryTest = sorry(sorryTest);

    var sorryString = sorryTest.toString("");
    console.log(sorryString);

    var finalString = sorryString.replace(/[1]/g, "Boop!");
    console.log(finalString);
    console.log(/[1]/.test(sorryString));

    $("#results").append(finalString);
    $(".result").show();
    $(".formDiv").hide();
    
    // conertedArray is the array of numbers, up to userInput #


    // var resultToShowUser = makeAstringOfNummbers(inputNumber);


  });
});
