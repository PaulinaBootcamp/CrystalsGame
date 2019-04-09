
// selects random numebr between 19-120 and displays it in html
var targetNumber;
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#number-to-guess").text(targetNumber);

var counter = 0;
wins = 0;
losses = 0;
document.getElementById("wins").innerHTML = (wins);
document.getElementById("losses").innerHTML = (+ losses);


//assign unique number from 1-12 for each of the houses
var gryffindor = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;
$("#gryffindor").text(gryffindor);
var hufflepuff = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;
var ravenclaw = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;
var slytherin = Math.floor(Math.random() * (12 - 1 + 1)) + 1;;

console.log(gryffindor, slytherin, hufflepuff, ravenclaw)

$(".houseCrest").on("click", function () {

    var clickValue = ($(this).id);
    console.log(this.id);
    counter += clickValue;

    if (counter === targetNumber) {
        wins++;
    }

    else if (counter >= targetNumber) {
        losses++;
    }

});

