// Business Logic

function convertNumberToArray(number) {
  var arrayOfNumbers = new Array(number + 1);
  var count = 0; //each empty space receives count
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    arrayOfNumbers[i] = count;
    count += 1;
  }
  return arrayOfNumbers; //array with numbers in each empty space, up to # of inputNumber;
}


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



// User Interface

$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#numberInput").val());

    var finalArray = beepBoopSorry(convertNumberToArray(inputNumber));

    $("#results").text(finalArray);

    $(".result").show();

    $("#originalNum").text(inputNumber);

  });
});
