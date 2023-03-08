"use strict"

//  Constants
const scores = [] //  Array of all scores
const MINSCORE = 0 //  Minimum achievable score
const MAXSCORE = 100 //  Maximum achievable score

//  Variables
let score = 0 //  Individual score
let scoreCount = 0 //  Total number of scores

// use do-while loop to get the scores from the user
do {
  score = parseInt(prompt("Enter a test score, or enter -1 to end scores", -1))

  if (score != -1) {
    if (isNaN(score) || score < MINSCORE || score > MAXSCORE) {
      alert(
        "Score must by a valid number between " + MINSCORE + " and " + MAXSCORE
      )
    } else {
      scores[scores.length] = score
      ++scoreCount
    }
  }
} while (score != -1)

if (scoreCount > 0) {
  // use a for-in loop to add each score to total, and display score
  let total = 0
  for (let i in scores) {
    total = total + scores[i]
    document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`)
  }

  //calculate and display the average
  const average = parseInt(total / scores.length)
  document.write(`<p>Average score is ${average}</p>`)
}
