import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/*
GET / HTTP/2.0
User-Agent: Chrome

HTTP/1.1 200 OK
Content-Length: 12
Content-Type: text/plain

Hello World!
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
