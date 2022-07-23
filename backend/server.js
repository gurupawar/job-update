require("dotenv").config();
const express = require("express");
const jobsRouter = require("./routes/jobs");
//express app.
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workout", jobsRouter);

//list for request
app.listen(process.env.PORT, () => {
  console.log(`listing on port`, process.env.PORT);
});
