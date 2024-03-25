// server instantiate
const express = require("express");
const app = express();

//activate the server at port 8000
app.listen(8000, () => {
  console.log("server started at port 8000");
});

//for parsing json data
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//defining route

//GET
app.get("/", (req, res) => {
  res.send("hello everyone");
});

//POST
app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("car submitted successfully");
});
