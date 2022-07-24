const express = require("express");
const JobModel = require("../models/JobModel");

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
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const jobmodel = await JobModel.create({ title, load, reps });
    res.status(200).json(jobmodel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
