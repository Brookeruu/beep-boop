// Business Logic

function makeAstringOfNummbers(originalInput) {
  var arrayOfNumbers1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  var arrayOfExceptions = ["Beep!","Boop!","Sorry, I cannot do that!"];
  var emptyStringForResult = "";

  for (var i = 0, i > originalInput.length; i ++);
    if ()

}



// User Interface

$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();

  var originalUserInput = parseInt($("#numberInput").val());

  var resultToShowUser = makeAstringOfNummbers(originalInput);

  });
});
