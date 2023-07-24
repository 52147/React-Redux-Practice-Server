const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const bodyParser = require("body-parser");
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello, Node.js!");
});
app.get("/api/data", (req, res) => {
  const data = { message: "Hello from the backend!" };
  res.json(data);
});

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 3002");
});
