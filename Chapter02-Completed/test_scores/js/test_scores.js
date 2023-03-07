"use strict"

//  Declare program MIN/MAX constants
const MINTESTSCORE = 0
const MAXTESTSCORE = 100

// initialize total variable
let total = 0

//get 3 scores from user and add them together
let score1 = parseInt(
  prompt("Enter test score 1 between " + MINTESTSCORE + " and " + MAXTESTSCORE)
)

while (isNaN(score1) || score1 < MINTESTSCORE || score1 > MAXTESTSCORE) {
  score1 = parseInt(
    prompt(
      "Enter test score 1 between " + MINTESTSCORE + " and " + MAXTESTSCORE
    )
  )
}
total += score1

let score2 = parseInt(
  prompt("Enter test score 2 between " + MINTESTSCORE + " and " + MAXTESTSCORE)
)

while (isNaN(score2) || score2 < MINTESTSCORE || score2 > MAXTESTSCORE) {
  score2 = parseInt(
    prompt(
      "Enter test score 2 between " + MINTESTSCORE + " and " + MAXTESTSCORE
    )
  )
}
total += score2

let score3 = parseInt(
  prompt("Enter test score 3 between " + MINTESTSCORE + " and " + MAXTESTSCORE)
)

while (isNaN(score3) || score3 < MINTESTSCORE || score3 > MAXTESTSCORE) {
  score3 = parseInt(
    prompt(
      "Enter test score 3 between " + MINTESTSCORE + " and " + MAXTESTSCORE
    )
  )
}
total += score3

//calculate the average
const average = parseFloat(total / 3)

// display the scores
const html = `<p>Score 1 = ${score1}</p>
    <p>Score 2 = ${score2}</p>
    <p>Score 3 = ${score3}</p>
    <p>Average score = ${average.toFixed(2)}</p>`
document.write(html)
