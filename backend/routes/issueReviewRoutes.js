let express = require('express');
// let Student = require('../models/studentSchema');
const IssueReview = require('../models/issueReviewSchema');

let router = express.Router();

// *******************POST METHOD******************
router.post("/", async (req, res) => {
    try {
        const { issueId, reviewDateTime, employeeId, review } = req.body;

        const createIssueReview = await IssueReview.create({ issueId, reviewDateTime, employeeId, review });

        res.json({ status: "success", data: createIssueReview });
    } catch (err) {
        res.json({ status: "error", data: err });
    }
});

// *******************GET METHOD (all review)******************
router.get("/", async (req, res) => {
    try {
        const issueReview = await IssueReview.find({});

        res.json({ status: "success", data: issueReview });
    } catch (err) {
        res.send({ status: "Failed", data: "Something Wents Wrong" })
    }
});

// *******************GET BY ID (single issue review)******************
router.get("/:id", async (req, res) => {
    try {
        const issueId = req.params.id; // Assuming you're searching by AssignCourse ID

        const getIssueReviewData = await IssueReview.find({ issueId })
            .populate("issueId")  // Replace with actual field name in schema
            .populate("employeeId");   // Replace with actual field name in schema

        if (!getIssueReviewData) {
            return res.status(404).json({ status: "error", message: "Issue Review not found" });
        }
        res.json({ status: "success", data: getIssueReviewData });

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});


// *******************PUT BY ID (update review) ******************
router.put("/:id", async (req, res) => {

    try {
        const issueReviewId = req.params.id;
        const body = req.body;

        let updatedData = await IssueReview.findByIdAndUpdate(issueReviewId, body, { new: true });

        res.json({ status: "success", data: updatedData });
    } catch (err) {
        res.json({ status: "ERROR", data: "Something Wents Wrong" });
    }
});

// *******************DELETE BY ID (delete review)******************
router.delete("/:id", async (req, res) => {
    // const studentId = req.params.id;
    try {
        const deletedData = await IssueReview.findByIdAndDelete(req.params.id);

        res.json({ status: "success", data: deletedData });

    } catch (err) {
        res.json({ status: "ERROR", data: "Something Wents Wrong" });
    }
});

module.exports = router;
