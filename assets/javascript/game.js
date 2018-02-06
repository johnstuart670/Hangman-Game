
// Array of word choices
var tableOfQueens = ["TYRASANCHEZ", "BEBEZAHARABENET", "RAJA", "SHARONNEEDLES", "JINKXMONSOON", "BIANCADELRIO", "VIOLETCHACHKI", "BOBTHEDRAGQUEEN", "SASHAVELOUR", "ALASKA", "CHADMICHAELS"];

var word = [];
var wrongGuesses = [];
var rightGuesses = [];
var counter = 0;
var index = 1;

$(document).ready(function() {
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
      $("#guessMe").append("_ ")
    }
  }
  wordSpaces();

  function endGame() {
    if (wrongGuesses.length >= 10 || rightGuesses.length == word.length) {
      $("body").css("background-color", "#ff4500");
      $(".form-control").prop('disabled', true);
    }
  }

});
