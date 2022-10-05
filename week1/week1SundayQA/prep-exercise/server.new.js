const fs = require("fs/promises");
const http = require("http");

//create a server
let server = http.createServer(async function (request, response) {
  // YOUR CODE GOES IN HERE

  if (request.url === "/") {
    // return index.html
    const contents = await fs.readFile("./index.html");
    response.writeHead(200, "OK", { "content-type": "text/html" });
    response.write(contents);
  } else if (request.url === "/index.js") {
    // return index.js
    const contents = await fs.readFile("./index.js");
    response.writeHead(200, "OK", { "content-type": "text/javascript" });
    response.write(contents);
  }

  response.end(); // Ends the response
});

server.listen(3000); // The server starts to listen on port 3000
