/* Mastermind I - no saved turns */

/* Initialization */
// colors, code, guess, feedback -- all arrays -- and turn
// set colors = r,b,g,w,c,y
var colors = ["r","b","g","w","c","y"], code = [], guess = [], feedback = [], cleanFeedback = [] ,thisTurn = [], turnRecords = [];




/* Main Function */
// call Main function (if no HTML)
main();
// define Main function
  function main () {
	// set code equal to setCode function
  code = setCode();
	// start while loop - check if 4 b's or first guess != q
  while (4==b && 0!=q); {
		// increment turn
  turn++;
		// set guess = getGuess
  guess = getGuess;
		// set feedback = testGuess(code, guess)
  feedback = testGuess(code, guess);
		// console log turn, guess and feedback
  console.log(turn, feedback);

	// alert "Charlie you've won" if while loop ended with first condition
    if (4==b) alert ("Charlie you've won");
  
	// alert "Quitter!" if while loop ended with section condition
 if else () alert ("Quitter");
  }
    }


/* Functions */
/* Create the Secret Code */
// define function setCode to receive colors and randomly fill code with four values 0-5




/* Get a Player's Guess */
// define function getGuess to prompt player for each of four colors and stores in guess array




/* Analyze the Guess */
// define function testGuess to receive code and guess, and analyze guess against code and produces feedback
	// initialize b, w, as 0;
	// initialize tempCode and tempGuess arrays, as copies with array.slice(0);
	// count the blacks and erase tempCode and tempGuess as you go - one loop
	// count the whites and erase tempCode and tempGuess as you go - nested loops
        // use "continue" once a match is found in the inner loop
	// set feedback equal to called formatFeedback function, sending it black and white counts
	// return the feedback




/* Format the Feedback */
// define function formatFeedback to receive blacks and whites, put b's first, w's second, delete the rest
	// initialize feedback;
	// loop from 0 to blacks count
		// write the black pegs first to feedback
	// loop from blacks count to whites count
		// write the white pegs second to feedback
	// return the new feedback array
