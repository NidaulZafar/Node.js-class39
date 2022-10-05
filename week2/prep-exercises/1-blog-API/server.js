const express = require('express');
const fs = require("fs");
const app = express();
const url = require('url');
 
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

// Deleting posts
app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  if (fs.existsSync(title)) { // Add condition here
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    res.send(`no blog with ${title} found`)// Respond with message here
  }
})


// Reading posts

app.get('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  // check if post exists
  if (fs.existsSync(title)) { // Add condition here
    const post = fs.readFileSync(title);
    // send response
    res.end(post);
  } else {
    res.send(`no blog with ${title} found`)// Respond with message here
  }
})




app.listen(3000, () => console.log('server started'))