require("dotenv").config();
const express = require("express");

//express app.
const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "hello",
  });
});

//list for request
app.listen(process.env.PORT, () => {
  console.log(`listing on port`, process.env.PORT);
});
