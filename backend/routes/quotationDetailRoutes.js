const express = require("express");
const router = express.Router();
const QuotationDetail = require("../models/quotationDetailSchema"); // adjust path if needed
const Customer = require("../models/customerSchema"); // assuming you have a Customer model

// Create a new quotation
router.post("/", async (req, res) => {
    try {
        const quotation = new QuotationDetail(req.body);
        await quotation.save();
        res.status(201).json(quotation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all quotations
router.get("/", async (req, res) => {
    try {
        const quotations = await QuotationDetail.find()
            .populate("customerId"); // populate customer details if needed
        res.json(quotations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a quotation by ID
router.get("/:id", async (req, res) => {
    try {
        const quotation = await QuotationDetail.findById(req.params.id)
            .populate("customerId");
        if (!quotation) {
            return res.status(404).json({ error: "Quotation not found" });
        }
        res.json(quotation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a quotation
router.put("/:id", async (req, res) => {
    try {
        const quotation = await QuotationDetail.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!quotation) {
            return res.status(404).json({ error: "Quotation not found" });
        }
        res.json(quotation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a quotation
router.delete("/:id", async (req, res) => {
    try {
        const quotation = await QuotationDetail.findByIdAndDelete(req.params.id);
        if (!quotation) {
            return res.status(404).json({ error: "Quotation not found" });
        }
        res.json({ message: "Quotation deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
