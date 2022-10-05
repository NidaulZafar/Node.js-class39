const fs = require("fs");
const http = require("http");

const sendFile = (res, filename) => {
  const fileStream = fs.createReadStream(filename);

  fileStream.on("error", () => {
    res.writeHead(500, "Internal server error");
    res.end("Internal server error");
  });

  fileStream.pipe(res);
};

//create a server
const server = http.createServer(function (req, res) {
  let filename;
  switch (req.url) {
    case "/":
      res.writeHead(200, "OK", { "content-type": "text/html" });
      filename = "./index.html";
      break;
    case "/index.js":
      res.writeHead(200, "OK", { "content-type": "text/javascript" });
      filename = "./index.js";
      break;
    case "/style.css":
      res.writeHead(200, "OK", { "content-type": "text/css" });
      filename = "./style.css";
      break;
    default:
      res.writeHead(404, "Not Found", { "content-type": "text/html" });
      filename = "./404.html";
      break;
  }

  sendFile(res, filename);
});

server.listen(3000); // The server starts to listen on port 3000
