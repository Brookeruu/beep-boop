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


function beepBoopSorry(array) {
  var sorryArray = array;
  for (var i = 0; i < sorryArray.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      sorryArray[i] = " I'm sorry, Dave. I'm afraid I can't do that. ";
    } else if (i.toString().includes("1")) {
      sorryArray[i] = " Boop! ";
    } else if (i.toString().includes("0")) {
      sorryArray[i] = " Beep! ";
    }
  }
  return sorryArray;
}

// function boopMod1(array) {
//   var boopMod1Array = array;
//   for (var i = 0; i < boopMod1Array.length; i++) {
//     if (i % 10 === 1) {
//       boopMod1Array[i] = " Boop!";
//     }
//   }
//   return boopMod1Array;
// }




// User Interface

$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#numberInput").val());

    // var convertedArray = convertNumberToArray(inputNumber);


    var sorryTest = beepBoopSorry(convertNumberToArray(inputNumber));
    console.log(typeof sorryTest);

    var test = [];
    console.log(typeof test);

    // var boopTest = boopMod1(sorryTest);


    // var finalString = boopString.replace(/[1]\S/g, "Boop!");

    $("#results").text(sorryTest);

    $(".result").show();

    $("#originalNum").text(inputNumber);

  });
});
