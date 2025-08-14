import React, { useState } from 'react';

function QuotationDetails() {

    const [rows, setRows] = useState([
        { product: '', description: '', quantity: 0, rate: 0, total: 0 }
    ]);

    const handleAddRow = () => {
        setRows([
            ...rows,
            { product: '', description: '', quantity: 0, rate: 0, total: 0 }
        ]);
    };

    const handleRemoveRow = (index) => {
        if (rows.length === 1) return; // prevent removing the last row
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };

    return (
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>AMC Contract Details</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="">Home</a></li>
                            <li className="breadcrumb-item active">AMC Contract Details</li>
                        </ol>
                    </nav>
                </div>

                <div className="container  p-4 rounded shadow">
                    {/* Quotation Header */}
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <label className="form-label fw-bold">AMC Number <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Enter Quotation Number" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">AMC Date <span className="text-danger">*</span></label>
                            <input type="date" className="form-control" placeholder="dd-mm-yyyy" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Select Customer <span className="text-danger">*</span></label>
                            <select id="customerId" name='customerId' className="form-select" required>
                                <option value="" selected>-- Select Customer --</option>
                                <option value="1">Customer 1</option>
                                <option value="2">Customer 2</option>
                            </select>
                        </div>
                    </div>

                    {/* New AMC Details Row */}
                    <div className="row mb-4">
                        <div className="col-md-3">
                            <label className="form-label fw-bold">From Date</label>
                            <input type="date" className="form-control" />
                        </div>
                         <div className="col-md-3">
                            <label className="form-label fw-bold">To Date</label>
                            <input type="date" className="form-control" />
                        </div>
                         <div className="col-md-3">
                            <label className="form-label fw-bold">Term (Years)</label>
                            <input type="number" className="form-control" placeholder="Years" />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label fw-bold">Term (Months)</label>
                            <input type="number" className="form-control" placeholder="Months" />
                        </div>
                    </div>

                    
                    {/* Product Table */}
                    <table className="table table-bordered text-center align-middle">
                        <thead className="table-primary">
                            <tr>
                                <th>No</th>
                                <th>Product & Description</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    <td>{index + 1}
                                        <button className="btn btn-danger btn-sm ms-2" onClick={() => handleRemoveRow(index)} disabled={rows.length === 1}> x </button>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control mb-2" placeholder="Product" value={row.product} />
                                        <input type="text" className="form-control" placeholder="Product Description" value={row.description} />
                                    </td>
                                    <td>
                                        <input type="number" className="form-control text-center" value={row.quantity} />
                                    </td>
                                    {/* <td>
                                        <input type="number" className="form-control text-center" value={row.rate} />
                                    </td>
                                    <td>
                                        <input type="text" className="form-control text-center" value={row.total} readOnly />
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="text-center mt-4">
                        <button className="btn btn-outline-primary" onClick={handleAddRow}><i className="bi bi-plus-circle"></i> Add Row</button>
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
                                    <span>₹ 600.00</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Discount:</span>
                                    <div className="d-flex align-items-center">
                                        <input type="number" className="form-control form-control-sm me-2" style={{ width: "80px" }} />
                                        ₹ 200.00
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Total:</span>
                                    <span>₹ 400.00</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>GST (18%):</span>
                                    <span>₹ 72.00</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between fw-bold fs-5">
                                    <span>Bill Amount:</span>
                                    <span>₹ 472.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="text-end mt-4">
                        <button className="btn btn-danger rounded-pill btn-sm me-2 px-4 py-2">Save</button>
                        <button className="btn btn-success rounded-pill btn-sm me-2 px-4 py-2 ">Cancel</button>
                    </div>
                </div>

            </main>
        </>
    )
}

export default QuotationDetails;
