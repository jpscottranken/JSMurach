"use strict"

// get miles driven from user
let miles = parseInt(prompt("Enter miles driven"))

while (isNaN(miles) || miles <= 0) {
  miles = parseInt(prompt("Enter miles driven"))
}

// get gallons used from user
let gallons = parseInt(prompt("Enter gallons of gas used"))

while (isNaN(gallons) || gallons <= 0) {
  gallons = parseInt(prompt("Enter gallons of gas used"))
}

// calculate mpg
const mpg = parseFloat(miles / gallons)

// display results
const html = `<p><label>Miles: </label>${miles.toFixed(2)}</p>
    <p><label>Gallons: </label>${gallons.toFixed(2)}</p>
    <p><label>MPG: </label>${mpg.toFixed(2)}</p>`
document.write(html)
//alert(html)
