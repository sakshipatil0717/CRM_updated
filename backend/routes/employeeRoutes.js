let express = require('express');
let Employee = require('../models/employeeSchema');

let router = express.Router();

// *******************POST METHOD******************
router.post("/", async (req, res) => {
    try {
        const { name, position, email, mobile, password } = req.body;

        const createEmployee = await Employee.create({ name, position, email, mobile, password });

        res.json({ status: "success", data: createEmployee });
    } catch (err) {
        res.json({ status: "error", data: err });
    }
});

// *******************GET METHOD******************
router.get("/", async (req, res) => {

    try {
        const allEmployee = await Employee.find({});

        res.json({ status: "success", data: allEmployee });
    } catch (err) {
        res.send({ status: "Failed", data: "Something Wents Wrong" })
    }
});


// *******************GET BY ID******************
router.get("/:id", async (req, res) => {

    try {

        const employeeId = req.params.id;

        const singleEmployee = await Employee.findById(employeeId);

        res.json({ status: "success", data: singleEmployee })
    } catch (err) {
        res.send({ status: "failed", data: "Something Wents Wrong !!!" });
    }
});

// *******************PUT BY ID******************
router.put("/:id", async (req, res) => {

    try {
        const employeeId = req.params.id;
        const body = req.body;

        let updatedData = await Employee.findByIdAndUpdate(employeeId, body, { new: true });

        res.json({ status: "success", data: updatedData });
    } catch (err) {
        res.json({ status: "ERROR", data: "Something Wents Wrong" });
    }
});


// *******************DELETE BY ID******************
router.delete("/:id", async (req, res) => {
    // const studentId = req.params.id;
    try {
        const deletedData = await Employee.findByIdAndDelete(req.params.id);

        res.json({ status: "success", data: deletedData });

    } catch (err) {
        res.json({ status: "ERROR", data: "Something Wents Wrong" });
    }
});


module.exports = router;
