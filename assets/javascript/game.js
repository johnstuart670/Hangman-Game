// // array of Easy choices for the word to be guessed.  Winners/probable winners
var tableOfQueensEasy = ["Bianca Del Rio", "BeBe Zahara Benet", "Tyra Sanchez", "Raja Gemini", "Violet Chachki", "Sharon Needles", "Chad Michaels", "Alaska Thunderf", "Bob the Drag Queen", "Jinx Monsoon", "Sasha Velour", "Trixie Mattel Probably"];

// // // array of Hard Choices for the word to be guessed to be selected from (first outs, except with a SFW version of Season 5)
var tableOfQueensHard = ["Tempest DuJour", "Alisa Summers", "Serena ChaCha", "Morgan McMichaels", "Shangela Laquifa Wadley", "Victoria 'PorkChop' Parker", "Mimi Imfurst And Pandora Boxx", "Magnolia Crawford", "Venus D-lite", "Jaymes Mansfield", "Coco Montrese", "Kelly Mantle", "Naysha Lopez"];

var wordToGuess = [];

var activeWord = [];

// // This variable is ammended when the user keys a letter not in the strain of the current word
var wrongChoices = [];
// // Variable that holds our count of how many letters have been correctly guessed in the word.  Starts at 0, gets ++ if onkey event is successful
var correctChoices = [1];



var wins = 0;
var losses = 0;

$(document).ready(function() {

	// Function to select from easy version
	function easyButton() {
		// pick a random integer that is between 0 and the length of the array
		var random = Math.floor(Math.random() * tableOfQueensEasy.length);

		// make a new variable that is from the referenced array at random point from above
		var toString = tableOfQueensEasy[random];

		// log this item just to make sure it happened
		console.log(toString);

		// convert all the items to lowercase and split into separate items

		wordToGuess = toString.trim().toLowerCase().split("");
		// log the word to guess to make sure we are on track

		console.log(wordToGuess);

		// using the function loopLetters
		loopLetters();
	};

function loopLetters() {
	for (var i = 0; i < wordToGuess.length; i++){
		// wordToGuess.attr("data-letter", wordToGuess[i]);
		// wordToGuess.text("_");
		$("#guessMe").append(wordToGuess[i]);
	}
}

// click easyMode to select from easy queens
	$("#easyMode").on("click", easyButton());


// click hardMode to select from hard queens
$("#hardMode").on("click", function() {
	var random = Math.floor(Math.random() * tableOfQueensHard.length);
	var toString = tableOfQueensHard[random];
	console.log(toString);
	wordToGuess = toString.trim().toLowerCase().split("");
	console.log(wordToGuess);
	loopLetters();
});


// on input 
// $("body").keypress(function(event) {
// 	var inputCharacter = event.key.length;
// 	if ( inputCharacter.inArray( code, wordToGuess ) === -1) {
// 		//the input character is not in the array
// 		wrongChoices.push(inputCharacter);
// 	} else {
// 		//the input exists in the array push to correctChoices for as many times as it is in the array
// 		for(var i = 0;   i++)
// 		correctChoices.push(inputCharacter);
// 		//and update update the character 
// 	}
// });



// win  and lose conditions
if (wrongChoices.length >= 10) {
	loseFunction();
};
if (correctChoices.length === wordToGuess.length) {
	winFunction();
};

function loseFunction() {
	// add to losses counter
	losses++;
	// alert how many losses
	alert( "YOU LOSE GURL, SORRY.  YOU LOOK GOOD TODAY THOUGH! (Loss #" + losses + ")");
	//reset function hoisted from below
	reset();
	//update the information in the body with the losses
	$("#wins").append("Losses: " + losses);
};

function winFunction() {
	// add to wins counter
	wins++;
	// alert of how many wins
	alert( "YOU WIN GURL, YAAASSS!  WERK! (Win #" + wins + ")");
		//update the information in the body with the wins
	$("#wins").append("Wins: " + wins);
	//run the reset function
	reset();
};

function reset() {
	// resets arrays
	var wordToGuess = [];
	var wrongChoices = [];
	var correctChoices = [];
	//chooses new word from easy list
	easyButton();
};

});
