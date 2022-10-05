var fs = require('fs')
var myNumber = undefined

function addOne() {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    logMyNumber()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

function errorMyNumber() {
  console.error(myNumber);
}

addOne()
