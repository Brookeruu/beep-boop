// Business Logic

function convertNumberToArray(number) { //number is inputNumber as argument
  var arrayOfNumbers = new Array(number + 1); //new Array() creates array with empty spaces to fill
  var count = 0; //each empty space receives count
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    arrayOfNumbers[i] = count;
    count += 1;
  }
  return arrayOfNumbers; //array with numbers in each empty space, up to # of inputNumber;
}


// function beepBoopSorry(array) {
//   var beepBoopSorryArray = []
//   for (i=0; i<array.length; i++) {
//     if (i % 3 === 0 && i !== 0) {
//       array[i] = " I'm sorry, Dave. I'm afraid I can't do that. "
//     } else if (array[i].includes(1)) {
//       array[1] = " Boop! ";
//     } else if (array[i].includes(0)) {
//       array[i] = " Beep! ";
//     }
//   }
//   return beepBoopSorryArray;
//   console.log(beepBoopSorryArray);
// }
//
//




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
    } else if (array[i].includes(0)) {
      sorryArray[i] = " Beep! ";
    }
  }
  return sorryArray;
}

function boopMod1(array) {
  var boopMod1Array = array;
  for (var i = 0; i < boopMod1Array.length; i++) {
    if (i % 10 === 1) {
      boopMod1Array[i] = " Boop!";
    }
  }
  return boopMod1Array;
}




// User Interface

$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#numberInput").val());

    var convertedArray = convertNumberToArray(inputNumber);
    console.log(convertedArray);

    // var newArray = beepBoopSorry(convertedArray);
    // console.log(newArray);
    //
    // var beepTest = beep(convertedArray);

    var sorryTest = sorry(convertedArray);
    console.log(sorryTest);

    var boopTest = boopMod1(sorryTest);

    var boopString = boopTest.toString("");

    var finalString = boopString.replace(/[1]\S/g, "Boop!");

    $("#results").text(finalString);

    $(".result").show();

    $("#originalNum").text(inputNumber);

  });
});
