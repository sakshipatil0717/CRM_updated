let express = require('express');
const CustomerIssue = require('../models/customerIssueSchema');

let router = express.Router();

// *******************POST METHOD******************
router.post("/", async (req, res) => {
    try {

        const { customerId, issue, issueDate, employeeId, closeDate, status } = req.body;

        const createCustomerIssue = await CustomerIssue.create({ customerId, issue, issueDate, employeeId, closeDate, status });

        res.json({ status: "success", data: createCustomerIssue });
    } catch (err) {
        res.json({ status: "error", data: err });
    }
});


// *******************GET METHOD******************
// router.get("/", async (req, res) => {
  
//     try {
//         const customerIssue = await CustomerIssue.find({});

//         res.json({ status: "success", data: customerIssue });
//     } catch (err) {
//         res.send({ status: "Failed", data: "Something Wents Wrong" })
//     }
// });

router.get("/", async (req, res) => {
    try {

        const getcustomerIssueData = await CustomerIssue.find({ })
            .populate("customerId")  // Replace with actual field name in schema
            .populate("employeeId");   // Replace with actual field name in schema

        res.json({ status: "success", data: getcustomerIssueData });

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

// *******************GET BY ID ******************
router.get("/:id", async (req, res) => {
    try {
        const customerId = req.params.id; // Assuming you're searching by AssignCourse ID

        const getcustomerIssueData = await CustomerIssue.find({ customerId })
            .populate("customerId")  // Replace with actual field name in schema
            .populate("employeeId");   // Replace with actual field name in schema

        if (!getcustomerIssueData) {
            return res.status(404).json({ status: "error", message: "Issue not found" });
        }
        res.json({ status: "success", data: getcustomerIssueData });

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});


// *******************PUT BY ID ******************
router.put("/:id", async (req, res) => {
    try {
        const customerIssueId = req.params.id;
        const body = req.body;

        let updatedData = await CustomerIssue.findByIdAndUpdate(customerIssueId, body, { new: true });

        res.json({ status: "success", data: updatedData });
    } catch (err) {
        res.json({ status: "ERROR", data: "Something Wents Wrong" });
    }
});

// *******************DELETE BY ID ******************
router.delete("/:id", async (req, res) => {
    // const studentId = req.params.id;
    try {
        const deletedData = await CustomerIssue.findByIdAndDelete(req.params.id);

        res.json({ status: "success", data: deletedData });

    } catch (err) {
        res.json({ status: "ERROR", data: "Something Wents Wrong" });
    }
});

module.exports = router;
