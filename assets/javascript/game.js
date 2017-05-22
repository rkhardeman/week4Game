var losses= 0;
var wins= 0;
var score = 0;
//define possible targets here
var randomRupee = [10, 50, 153, 23, 207, 17];
var targetRupee = null;
//define rupee numbers here
var numberOptions = [1, 10, 20, 50];

//computer selects random number from list and send to screen
var targetRupee = randomRupee[Math.floor(Math.random() * randomRupee.length)]
$("#target").text(targetRupee);

// send win/loss count to screen
$("#wins").text(wins);
$("#losses").text(losses);

// $("#user-score").text(score);

//update target rupee after winning, or lossing
var updateTargetRupee = function() {
  targetRupee = randomRupee[Math.floor(Math.random() * randomRupee.length)]
  $("#target").text(targetRupee);
};

//reset function
var resetAll = function() {
	//set score back to zero and print to screen
	score = 0;
	$(".userScore").text("Your Rupees: " + score);
	//update new target rupee
	updateTargetRupee();
};


// loop through the number options and assign them to the Link icons
for (var  i = 0; i < numberOptions.length; i++) {
	var iconLink = $("img")[i];
	$(iconLink).addClass("linkImage");
	$(iconLink).attr("data-linkValue", numberOptions[i]);
	$(".icon").append(iconLink);
}

//on click event take value of link and add to score, print to screen
$(".linkImage").on("click", function(){
	var linkValue = ($(this).attr("data-linkValue"));
	linkValue = parseInt(linkValue);
	score += linkValue;
	$(".userScore").text("Your Rupees: " + score);

		// if score equals target rupees increment wins and reset game
		if (score == targetRupee){
			alert("You've saved Hyrule and you are a real hero! :)");
			wins ++;
			document.querySelector('.wins').innerHTML = "Wins: " + wins;

			resetAll();
		// if score exceeds target rupees increment losses and reset game
		} else if (score > targetRupee){
			alert("Game Over! Ganon has returned! :(");
			losses ++;
			document.querySelector(".losses").innerHTML = "Losses: " + losses;
			resetAll();
		}
});

