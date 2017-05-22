var loss= 0;
var win= 0;
var score = 0;
//define possible targets here
var randomRupee = [10, 50, 153, 23, 207, 17];
var targetRupee = null;
//define rupee numbers here
var numberOptions = [1, 10, 20, 50];

//computer selects random number from list
var targetRupee = randomRupee[Math.floor(Math.random() * randomRupee.length)]
$("#target").text(targetRupee);

$("#wins").text(win);

$("#user-score").text(score);

var updateTargetRupee = function() {
  targetRupee = randomRupee[Math.floor(Math.random() * randomRupee.length)];
};

var resetAll = function() {
	var score = 0;
	updateTargetRupee();
};


// loop through the number options and assign them to the Link icons
for (var  i = 0; i < numberOptions.length; i++) {
	var iconLink = $("img")[i];
	$(iconLink).addClass("linkImage");
	$(iconLink).attr("data-linkValue", numberOptions[i]);
	$(".icon").append(iconLink);
}


$(".linkImage").on("click", function(){
	var linkValue = ($(this).attr("data-linkValue"));
	linkValue = parseInt(linkValue);
	score += linkValue;
	alert("New score: " + score);

		if (score == targetRupee){
			alert("You Win!");
			win++;
			resetAll()
		} else if (score >= targetRupee){
			alert("You lose!");
			loss++;
		}
});

