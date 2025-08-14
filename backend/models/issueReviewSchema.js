const mongoose = require("mongoose");


const issueReviewSchema = new mongoose.Schema({
    issueId:{ type: mongoose.Types.ObjectId, ref: "customerIssue" },
    reviewDateTime: { type: String, required: true },    
    employeeId: { type: mongoose.Types.ObjectId, ref: "employee" },
    review: { type: String, required: true }
});

const IssueReview = mongoose.model("issueReview", issueReviewSchema);
module.exports = IssueReview;