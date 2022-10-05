var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback(myNumber)
  })
}

function logMyNumber(n) {
  console.log(n)
}

function errorMyNumber(n) {
  console.error(n)
}

addOne(er)
