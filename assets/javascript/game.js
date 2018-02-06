// Array of word choices
var tableOfQueens = ["TYRASANCHEZ", "BEBEZAHARABENET", "RAJA", "SHARONNEEDLES", "JINKXMONSOON", "BIANCADELRIO", "VIOLETCHACHKI", "BOBTHEDRAGQUEEN", "SASHAVELOUR", "ALASKA", "CHADMICHAELS"];

var word = [];
var wrongGuesses = [];
var rightGuesses = [];
var counter = 0;
var index = 1;
// create a bunch of buttons
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];


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
$(".button1").on("click", function() {
	// set variable buttonValue to text of button
	var buttonValue = $(this).text();
	console.log(buttonValue);
	// loop through word
	for (var i = 0; i < word.length; i++){
		// if word at index is approximate to buttonValue
		if( word[i] == buttonValue){
			// push guess to rightGuesses
			rightGuesses.push(buttonValue);
			console.log(rightGuesses);
			// update the .innertext to buttonValue
			$(("."+buttonValue)).text(buttonValue);
		}

	}
});

  function endGame() {
    if (wrongGuesses.length >= 10 || rightGuesses.length == word.length) {
      $("body").css("background-color", "#ff4500");
      $(".form-control").prop('disabled', true);
    }
  }

});
function newFunction() {
	return "Handler for .keyup() called.";
}

