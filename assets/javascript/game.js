
// selects random numebr between 19-120 and displays it in html
var targetNumber;
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#number-to-guess").text(targetNumber);

var counter = 0;
wins = 0;
losses = 0;
counter = 0;
document.getElementById("wins").innerHTML = (wins);
document.getElementById("losses").innerHTML = (losses);
document.getElementById("userGuessTotal").innerHTML = (counter);


//assign unique number from 1-12 for each of the houses
var gryffindor = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;
var hufflepuff = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;
var ravenclaw = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;
var slytherin = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;

console.log(gryffindor, slytherin, hufflepuff, ravenclaw)

$("#gryffindor").attr("data-number", gryffindor);
$("#hufflepuff").attr("data-number", hufflepuff);
$("#ravenclaw").attr("data-number", ravenclaw);
$("#slytherin").attr("data-number", slytherin);

$(".houseCrest").on("click", function () {

    var clickValue = ($(this).attr("data-number"));
    clickValue = parseInt(clickValue);
    console.log(clickValue);
    counter += clickValue;
    console.log(counter);
    document.getElementById("userGuessTotal").innerHTML = (counter);
    console.log(counter);
    console.log(targetNumber);

    if (counter === targetNumber) {

        wins++;
        document.getElementById("wins").innerHTML = (wins);
        document.getElementById("losses").innerHTML = (losses);
        console.log(targetNumber)
        console.log(counter)
        counter = 0;
        document.getElementById("userGuessTotal").innerHTML = (counter);
        var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#number-to-guess").text(targetNumber);
    }

    else if (counter >= targetNumber) {

        losses++;
        document.getElementById("wins").innerHTML = (wins);
        document.getElementById("losses").innerHTML = (losses);
        console.log(targetNumber)
        console.log(counter)
        counter = 0;
        document.getElementById("userGuessTotal").innerHTML = (counter);
    }

});



