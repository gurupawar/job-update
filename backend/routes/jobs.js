const express = require("express");

const router = express.Router();

//Get all jobs
router.get("/", (req, res) => {
  res.json({
    msg: "Get all jobs",
  });
});

//Get a single job
router.get("/:id", (req, res) => {
  res.json({
    msg: "Get a single job",
  });
});

//Post a new job
router.post("/", (req, res) => {
  res.json({
    msg: "Post new job",
  });
});

//Delete a job
router.delete("/:id", (req, res) => {
  res.json({
    msg: "delete a job",
  });
});

//Post a new job
router.patch("/:id", (req, res) => {
  res.json({
    msg: "update job",
  });
});
module.exports = router;
