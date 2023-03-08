"use strict"

const MININVESTMENT = 1000
const MAXINVESTMENT = 1000000
const MINRATE = 1.0
const MAXRATE = 10.0
const MINYEARS = 5
const MAXYEARS = 25
let again = "Y"
let firstChar = ""
let runProgramAgain = true

while (runProgramAgain) {
  // get investment amount - loop until user enters a number
  let investment = 0
  do {
    investment = parseFloat(
      prompt("Enter investment amount as xxxxx.xx", 10000)
    )
  } while (
    isNaN(investment) ||
    investment < MININVESTMENT ||
    investment > MAXINVESTMENT
  )

  // get interest rate - loop until user enters a number
  let rate = 0
  do {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5))
  } while (isNaN(rate) || rate < MINRATE || rate > MAXRATE)

  // get number of years - loop until user enters a number
  let years = 0
  do {
    years = parseInt(prompt("Enter number of years", 10))
  } while (isNaN(years) || years < MINYEARS || years > MAXYEARS)

  // calulate future value
  let futureValue = investment
  for (let i = 1; i <= years; i++) {
    futureValue += (futureValue * rate) / 100
  }

  // display results
  document.write(`<p><label>Investment amount:</label> ${investment}</p>`)
  document.write(`<p><label>Interest rate:</label> ${rate}</p>`)
  document.write(`<p><label>Years:</label> ${years}</p>`)
  document.write(
    `<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`
  )

  again = prompt("Run Program Again??? (Y/N)", "Y")
  again = again.toUpperCase()
  firstChar = again.charAt(0)

  if (firstChar != "Y") {
    runProgramAgain = false
  }
}
