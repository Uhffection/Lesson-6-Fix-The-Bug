// Run the following code and observe the console logs.
// Which log statement has an unexpected number?  What needs to
// change in this code to correct the unexpected number to an
// expected number? (HINT - Check what is logged for the first score)

// START
var score = 80;
var secondScore = 90;

export function averageScore() {
  score = (score + secondScore) / 2;
  return score;
}

var average = averageScore();

// Be sure to comment out these lines
console.log("The first score is", score);
console.log("The second score is", secondScore);
console.log("The average score is", average);