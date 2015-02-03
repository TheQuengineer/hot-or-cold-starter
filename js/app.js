$(document).ready(function() {
    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
    /*--- Restart Game ---*/
    $("a.new").click(function() {
        alert("Ok, Lets Start a new Game!");
        location.reload();
    });

    /*--- Game Logic ---*/
    var generateNumber = function(minimumNumber, maximumNumber) {
        return Math.floor(Math.random() * ((minimumNumber - maximumNumber) + 1) + maximumNumber);
    };

    var showGuessCount = function(count) {
        $("#count").html(count)
    };

    Number.prototype.between = function(min, max) {
        return this > min && this < max;
    };

    var guessCount = 0;
    var game = newGame();


    $("form").on('submit', function(event) {
        event.preventDefault();
        var guess = $(this).children("#userGuess").val();
        game(guess);
        showGuessCount(guessCount++);
    });

    function newGame() {
        var computerGuess = generateNumber(1, 100);
        var lastUserGuess;

        return function(guess) {
            Number.prototype.between = function(min, max) {
                return this > min && this < max;
            };
            if (parseInt(guess) === computerGuess) {
                alert("CONGRATULATIONS YOU WIN!!!! The number I had was: " + computerGuess);
            } else if ((parseInt(guess)).between(computerGuess - 5, computerGuess + 5)) {
                alert("You are Blazing HOT. Keep Guessing, you are so CLOSE!!");
            } else if ((parseInt(guess)).between(computerGuess - 10, computerGuess + 10)) {
                alert("You are WARM within range! Keep Guessing");
            } else {
                alert("You are SUB ZERO COLD mang. Way OFF!!! Keep Guessing!");
            }
            lastUserGuess = guess;
        };
    };
});
