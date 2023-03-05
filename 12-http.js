const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page!");
    // return;
  }
  if (req.url === "/about") {
    res.end("This is our short hisotry");
    // return;
  }
  res.end("Page is not found");
});

server.listen(5000);
