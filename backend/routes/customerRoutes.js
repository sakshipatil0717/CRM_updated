let express = require('express');
let Customer = require('../models/customerSchema');

let router = express.Router();

// *******************POST METHOD******************
router.post("/", async (req, res) => {
    try {

        const { name, address, email, mobile, alternativeMobile } = req.body;

        const createCustomer = await Customer.create({ name, address, email, mobile, alternativeMobile });

        res.json({ status: "success", data: createCustomer });
    } catch (err) {
        res.json({ status: "error", data: err });
    }

});

// *******************GET METHOD******************
router.get("/", async (req, res) => {

    try {
        const allCustomer = await Customer.find({});

        res.json({ status: "success", data: allCustomer });
    } catch (err) {
        res.send({ status: "Failed", data: "Something Wents Wrong" })
    }
});


// *******************GET BY ID******************
router.get("/:id", async (req, res) => {

    try {

        const customerId = req.params.id;

        const singleCustomer = await Customer.findById(customerId);

        res.json({ status: "success", data: singleCustomer })
    } catch (err) {
        res.send({ status: "failed", data: "Something Wents Wrong !!!" });
    }
});

// *******************PUT BY ID******************
router.put("/:id", async (req, res) => {

    try {

        const customerId = req.params.id;
        const body = req.body;

        let updatedData = await Customer.findByIdAndUpdate(customerId, body, { new: true });

        res.json({ status: "success", data: updatedData });
    } catch (err) {
        res.json({ status: "ERROR", data: "Something Wents Wrong" });
    }
});

// *******************DELETE BY ID******************
router.delete("/:id", async (req, res) => {
    // const studentId = req.params.id;

    try {
        const deletedData = await Customer.findByIdAndDelete(req.params.id);

        res.json({ status: "success", data: deletedData });

    } catch (err) {
        res.json({ status: "ERROR", data: "Something Wents Wrong" });
    }

});

module.exports = router;