// Business Logic
var arrayOfNumbers1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var arrayOfExceptions = ["Beep!","Boop!","Sorry, I cannot do that!", "Invalid Number!"];
var emptyStringForResult = "";

function makeAstringOfNummbers(originalInput) {
  for (var i = 0; i < arrayOfNumbers1.length; i ++);
    if (originalInput < 0 || i > 15 ) {
      return emptyStringForResult += arrayOfExceptions[3]
      console.log(emptyStringForResult);
    }
    else if (originalInput === 0) {
      return emptyStringForResult += arrayOfExceptions[0];
    }
    // else if ( )

}



// User Interface

$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();

  var originalUserInput = parseInt($("#numberInput").val());
  console.log(originalUserInput);

  var resultToShowUser = makeAstringOfNummbers(originalUserInput);

  });
});
