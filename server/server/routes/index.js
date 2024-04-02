const express = require("express");
const { postJob, allJobs, deleteJob, updateJobInterest } = require("../controllers/jobPostingController");


const router = express.Router({ caseSensitive: true, strict: true });

//healthCheck
router.get("/healthcheck", (req, res) => {
  res.json({
    uptime: Math.floor(process.uptime()) + " seconds",
    message: "Mongo-Node",
    timestamp: Date.now(),
  });
});

//jobs
router.post("/postjob", postJob)
router.get("/getjobs", allJobs)
router.delete("/deletejob", deleteJob)
router.post("/updatejob", updateJobInterest )




module.exports = router;
