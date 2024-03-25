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

// database connection
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("====================================");
    console.log("Database connection established");
  })
  .catch((error) => {
    console.error(
      "Received an error during database connection:",
      error.message
    );
  });
