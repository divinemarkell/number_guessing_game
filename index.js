$(document).ready(function() {

 function generateRandomNumber() {
    return Math.floor(Math.random()* 100 + 1);
 }

let randomNumber = generateRandomNumber ();
  console.log(randomNumber);

function checkGuess(guess) {
    let diff = Math.abs(guess - randomNumber);
    if (diff == 0) {
      alert('Nailed it!');
      } else if (diff < 5) {
        alert ('Hot');
      } else if (diff < 10) {
        alert ('Warm');
      } else {
        alert ('Cold');
    }
  }
    //jQuery code below
  $('.guessingForm').submit(function(event) {
        event.preventDefault();
        var guess = $('#js-user-guess').val();
        $('#js-user-guess').val('');
        checkGuess(guess);
      });
    // document.ready end
    });
