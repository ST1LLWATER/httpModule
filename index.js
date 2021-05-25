const http = require("http");

let arr = [];
const server = http.createServer((req, res) => {
  const url = req.url.replace("/", "");
  if (url === "favicon.ico") {
    return res.end();
  }
  arr.push(url);
  console.log(arr);
  res.end(`${arr.join(" ")} `);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening To Port Number 8080");
});
