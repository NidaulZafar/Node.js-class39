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



// Updating existing posts
app.put('/posts/:title', (req, res) => {
  // How to get the title and content from the request?
  // What if the request does not have a title and/or content?
  const title = req.body.title;
  const content = req.body.content;
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok')
  }
  else {
    // Send response with error message
    res.send('This post does not exist!')
  }
})





app.listen(3000, () => console.log('server started'))