// Array of word choices
var tableOfQueens = ["TYRASANCHEZ", "BEBEZAHARABENET", "RAJA", "SHARONNEEDLES", "JINKXMONSOON", "BIANCADELRIO", "VIOLETCHACHKI", "BOBTHEDRAGQUEEN", "SASHAVELOUR", "ALASKA", "CHADMICHAELS"];

var word = [];
var wrongGuesses = 0;
var rightGuesses = 0;
var counter = 0;
var index = 1;
var wins = 0;
var losses = 0;
// create a bunch of buttons
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];


// images for changing Deathdrop images
// var updateImage = ["assets/images/0", "assets/images/1", "assets/images/2", "assets/images/3", "assets/images/4", "assets/images/5", "assets/images/6", "assets/images/7", "assets/images/8", "assets/images/9"];

$(document).ready(function() {

// add the alphabet buttons
	for (var i = 0; i < letters.length; i++) {
		var letterBtn = $("<button>");
					 letterBtn.text(letters[i])
					 .addClass("button1");
					 $("#buttons").append(letterBtn);
				 };

  function randomWord() {
    var random = Math.floor(Math.random() * tableOfQueens.length);
    var toString = tableOfQueens[random];
    console.log(toString);
    word = toString.split("");
    console.log(word);
	}
	
randomWord();

  function wordSpaces() {
    for (var i = 0; i < word.length; i++) {
			// making the boxes buttons to make it easier
			var dashBox = $("<button>");
			dashBox.addClass(word[i]);
			dashBox.text("_");
			$("#guessMe").append(dashBox);
		}
		console.log(word);
  };
	wordSpaces();

	// Alpha buttons when clicked cycle through active words
$(".button1").click(function() {
	// set variable buttonValue to text of button
	var buttonValue = $(this).text();
	console.log(buttonValue);
	// loop through word
	for (var i = 0; i < word.length; i++){
		// if word at index is approximate to buttonValue
		if( word[i] == buttonValue){
			// push guess to rightGuesses
			rightGuesses++;
			// update the .innertext to buttonValue
			$(("."+buttonValue)).text(buttonValue);
			console.log(rightGuesses);
		}
		else{ wrongGuesses++;
			// $("#laganjaScoreCard").attr('src', updateImage[wrongGuesses]);
		}
	};
});

// also onkeyup run the function
document.onkeyup = function(event) {
	var buttonValue = String.fromCharCode(event.keyCode)
	console.log(buttonValue);
	// loop through word
	for (var i = 0; i < word.length; i++){
		// if word at index is approximate to buttonValue
		if( word[i] == buttonValue){
			// push guess to rightGuesses
			rightGuesses++;
			// update the .innertext to buttonValue
			$(("."+buttonValue)).text(buttonValue);
			console.log(rightGuesses);
		}
		else{ wrongGuesses++;
			// $("#laganjaScoreCard").attr('src', updateImage[wrongGuesses]);
		}
	};
};

	function win() {
	wins++;
alert("YOU DID IT GURL!  THIS IS YOUR " + wins + "win!")
	reset();
}
function lose() {
	losses++;
	alert("YAASS QWEEN, SICKENING DEATH DROP (but u lose tho :( ).  This is your " + losses + "loss");
	reset();
};


});
