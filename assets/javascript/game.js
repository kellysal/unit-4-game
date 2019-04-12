// 2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

//   * There will be four crystals displayed as buttons on the page.

//   * The player will be shown a random number at the start of the game.

//   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//     * Your game will hide this amount until the player clicks a crystal.
//     * When they do click one, update the player's score counter.

//   * The player wins if their total score matches the random number from the beginning of the game.

//   * The player loses if their score goes above the random number.

//   * The game restarts whenever the player wins or loses.

//     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
$(document).ready(function () {


    //* The random number shown at the start of the game should be between 19 - 120.
    var randomNumber = Math.floor(Math.random() * 102 + 19);
    $("#randomNum").text(randomNumber);

    //* Each crystal should have a random hidden value between 1 - 12. *
    var crystal1 = Math.floor(Math.random() * 12 + 1);
    var crystal2 = Math.floor(Math.random() * 12 + 1);
    var crystal3 = Math.floor(Math.random() * 12 + 1);
    var crystal4 = Math.floor(Math.random() * 12 + 1);


    // Name variables to keep track of wins, losses & total

    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    // display wins
    $("#wins").text(wins);

    // display losses
    $("#losses").text(losses);

    //game reset after win or lose
    function reset() {
        randomNumber = Math.floor(Math.random() * 102 + 19);
        $("#randomNum").text(randomNumber);
        crystal1 = Math.floor(Math.random() * 12 + 1);
        crystal2 = Math.floor(Math.random() * 12 + 1);
        crystal3 = Math.floor(Math.random() * 12 + 1);
        crystal4 = Math.floor(Math.random() * 12 + 1);
        playerTotal = 0;
        $("#totalScore").text(playerTotal);
    }
    //display wins
    function winner() {
        alert("Congrats! You won!");
        wins++;
        $("#wins").text(wins);
        reset();
    }
    //display losses
    function loser() {
        alert("You lost!");
        losses++;
        $("#losses").text(losses);
        reset();
    }

    //on click event - assign to crystals
    $("#blue").on("click", function () {
        playerTotal = playerTotal + crystal1;
        $("#totalScore").html(playerTotal);
        //win or lose
        if (playerTotal === randomNumber) {
            winner();
        }
        else if (playerTotal > randomNumber) {
            loser();
        }
    })

    $("#green").on("click", function () {
        playerTotal = playerTotal + crystal2;
        $("#totalScore").html(playerTotal);
        //win or lose
        if (playerTotal === randomNumber) {
            winner();
        }
        else if (playerTotal > randomNumber) {
            loser();
        }
    })
    $("#yellow").on("click", function () {
        playerTotal = playerTotal + crystal3;
        $("#totalScore").html(playerTotal);
        //win or lose
        if (playerTotal === randomNumber) {
            winner();
        }
        else if (playerTotal > randomNumber) {
            loser();
        }
    })
    $("#pink").on("click", function () {
        playerTotal = playerTotal + crystal4;
        $("#totalScore").html(playerTotal);
        //win or lose
        if (playerTotal === randomNumber) {
            winner();
        }
        else if (playerTotal > randomNumber) {
            loser();
        }
    })

})