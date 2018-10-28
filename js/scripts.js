// Business Logic

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

function boopMod1(array) {
  var boopMod1Array = array;
  for (var i = 0; i < boopMod1Array.length; i++) {
    if (i % 10 === 1) {
      boopMod1Array[i] = "Boop!";
    }
  }
  return boopMod1Array;
}

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

    var convertedArray = convertNumberToArray(inputNumber);

    var beepTest = beep(convertedArray);

    var sorryTest = sorry(beepTest);

    var boopTest = boopMod1(sorryTest);
    console.log(boopTest);

    var boopString = boopTest.toString("");

    var finalString = boopString.replace(/[1]\S/g, "Boop!");
  
    $("#results").text(finalString);

    $(".result").show();

    $("#originalNum").text(inputNumber);

  });
});
