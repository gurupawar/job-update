require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jobsRouter = require("./routes/jobs");
//express app.
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workout", jobsRouter);

//Connect to Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //list for request
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on port`, process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
