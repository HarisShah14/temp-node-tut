const http = require("http");

// First parameter is the request
// Second parameter is the response.
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short story");
  }
  res.end(
    `<h1>Oops!</h1>
    <p>We can't to seem to find the page you're looking for</p>
    <a href="/">Back Home</a>`
  );
});

// What port we will be listening to
server.listen(5000);
