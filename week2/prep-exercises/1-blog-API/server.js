const express = require('express');
const fs = require("fs");
const app = express();
 
app.use(express.json());

// YOUR CODE GOES IN HERE
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Creating new posts
app.post('/blogs', (req, res) => {
  // How to get the title and content from the request??
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.end('ok')
})




app.listen(3000)