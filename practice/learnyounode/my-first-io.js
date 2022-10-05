const fs = require('fs');
console.log(2)
fs.readFileSync('./helloWorld.js', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})