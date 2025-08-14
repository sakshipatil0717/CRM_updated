const mongoose = require("mongoose");


const customerIssueSchema = new mongoose.Schema({
    customerId: { type: mongoose.Types.ObjectId, ref: "customer" },
    issue:{ type: String, required: true },
    issueDate: { type: String, required: true },    
    employeeId: { type: mongoose.Types.ObjectId, ref: "employee" },
    // closeDate: { type: String, required: true },
    closeDate: { type: String},
    // status: { type: String, required: true }
});

const CustomerIssue = mongoose.model("customerIssue", customerIssueSchema);
module.exports = CustomerIssue;