
import axios from "axios";
import React, { useState, useEffect } from "react";

function QuotationDetails() {
    const [rows, setRows] = useState([
        { product: "", description: "", quantity: 0, rate: 0, total: 0 },
    ]);

    const [discount, setDiscount] = useState(0); // discount in rupees
    const [summary, setSummary] = useState({
        subtotal: 0,
        totalAfterDiscount: 0,
        gst: 0,
        billAmount: 0,
    });

    // Add new row
    const handleAddRow = () => {
        setRows([
            ...rows,
            { product: "", description: "", quantity: 0, rate: 0, total: 0 },
        ]);
    };

    // Remove row
    const handleRemoveRow = (index) => {
        if (rows.length === 1) return; // prevent removing last row
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };


    const handleChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;

        if (field === "quantity" || field === "rate") {
            const qty = parseFloat(updatedRows[index].quantity) || 0;
            const rate = parseFloat(updatedRows[index].rate) || 0;
            updatedRows[index].total = qty * rate;
        }

        setRows(updatedRows);
    };

    // Auto calculate summary whenever rows or discount change
    useEffect(() => {
        const subtotal = rows.reduce((sum, row) => sum + row.total, 0);
        const totalAfterDiscount = subtotal - discount;
        const gst = totalAfterDiscount * 0.18;
        const billAmount = totalAfterDiscount + gst;

        setSummary({ subtotal, totalAfterDiscount, gst, billAmount });
    }, [rows, discount]);

    // Fetch Customers
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASEURL + "/customers")
            .then((res) => {
                setCustomerData(res.data.data);
            })
            .catch((error) => console.error("Error fetching customers:", error));
    }, []);


    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Quotation Details</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Quotation Details</li>
                    </ol>
                </nav>
            </div>

            <div className="container p-4 rounded shadow">
                {/* Quotation Header */}
                <div className="row mb-4">
                    <div className="col-md-4">
                        <label className="form-label fw-bold">
                            Quotation Number <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Quotation Number"
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-bold">
                            Date <span className="text-danger">*</span>
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="dd-mm-yyyy"
                        />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label fw-bold">
                            Select Customer <span className="text-danger">*</span>
                        </label>
                        <select id="customerId" name="customerId" className="form-select" required>
                            <option value="" defaultValue>-- Select Customer --</option>
                            {
                                customerData.map((customer) => {
                                    return (
                                        <option key={customer._id} value={customer._id}>
                                            {customer.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                {/* Product Table */}
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-primary">
                        <tr>
                            <th>No</th>
                            <th>Product & Description</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    {index + 1}
                                    <button
                                        className="btn btn-danger btn-sm ms-2"
                                        onClick={() => handleRemoveRow(index)}
                                        disabled={rows.length === 1}
                                    >
                                        x
                                    </button>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        placeholder="Product"
                                        value={row.product}
                                        onChange={(e) =>
                                            handleChange(index, "product", e.target.value)
                                        }
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Product Description"
                                        value={row.description}
                                        onChange={(e) =>
                                            handleChange(index, "description", e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control text-center"
                                        value={row.quantity}
                                        onChange={(e) =>
                                            handleChange(index, "quantity", e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control text-center"
                                        value={row.rate}
                                        onChange={(e) =>
                                            handleChange(index, "rate", e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control text-center"
                                        value={row.total}
                                        readOnly
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="text-center mt-4">
                    <button className="btn btn-outline-primary" onClick={handleAddRow}>
                        <i className="bi bi-plus-circle"></i> Add Row
                    </button>
                </div>

                {/* Terms and Summary */}
                <div className="row mt-5">
                    {/* Terms */}
                    <div className="col-md-6">
                        <div className="border p-3 bg-light rounded h-100">
                            <h6 className="fw-bold mb-3 text-center">Terms & Conditions</h6>
                            <hr />
                            <ul className="mb-0">
                                <li>Payment to be made within 7 days.</li>
                                <li>Warranty as per manufacturer.</li>
                                <li>Goods once sold will not be taken back.</li>
                                <li>Prices are exclusive of GST.</li>
                                <li>Delivery in 5-7 working days.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="col-md-6">
                        <div className="border p-3 bg-light rounded">
                            <h6 className="fw-bold mb-3 text-center">Quotation Summary</h6>
                            <hr />
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal:</span>
                                <span>₹ {summary.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Discount:</span>
                                <div className="d-flex align-items-center">
                                    <input
                                        type="number"
                                        className="form-control form-control-sm me-2"
                                        style={{ width: "80px" }}
                                        value={discount}
                                        onChange={(e) => setDiscount(Number(e.target.value))}
                                    />
                                    ₹ {discount.toFixed(2)}
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Total:</span>
                                <span>₹ {summary.totalAfterDiscount.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>GST (18%):</span>
                                <span>₹ {summary.gst.toFixed(2)}</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between fw-bold fs-5">
                                <span>Bill Amount:</span>
                                <span>₹ {summary.billAmount.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="text-end mt-4">
                    <button className="btn btn-danger rounded-pill btn-sm me-2 px-4 py-2">
                        Save
                    </button>
                    <button className="btn btn-success rounded-pill btn-sm me-2 px-4 py-2">
                        Cancel
                    </button>
                </div>
            </div>
        </main>
    );
}

export default QuotationDetails;

