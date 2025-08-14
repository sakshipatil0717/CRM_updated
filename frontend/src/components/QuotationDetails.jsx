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

                <div class="pagetitle">
                    <h1>Quotation Details</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="">Home</a></li>
                            <li class="breadcrumb-item active">Quotation Details</li>
                        </ol>
                    </nav>
                </div>

                <div class="container p-4 rounded shadow">
                    {/* <!-- Quotation Header --> */}
                    <div class="row mb-4">
                        <div class="col-md-4">
                            <label class="form-label fw-bold">Quotation Number <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Enter Quotation Number" />
                        </div>
                        <div class="col-md-4">
                            <label class="form-label fw-bold">Date <span class="text-danger">*</span></label>
                            <input type="date" class="form-control" placeholder="dd-mm-yyyy" />
                        </div>

                        <div class="col-md-4">
                            <label class="form-label fw-bold">Select Customer <span class="text-danger">*</span></label>
                            <select id="customerId" name='customerId' class="form-select" required>
                                <option value="" selected>-- Select Customer --</option>
                                <option value="1">Customer 1</option>
                                <option value="2">Customer 2</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- Product Table --> */}
                    <table class="table table-bordered text-center align-middle">
                        <thead class="table-primary">
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
                                    <td>
                                        <input type="number" className="form-control text-center" value={row.rate} />
                                    </td>
                                    <td>
                                        <input type="text" className="form-control text-center" value={row.total} readOnly />
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="text-center mt-4">
                        <button className="btn btn-outline-primary" onClick={handleAddRow}><i class="bi bi-plus-circle"></i> Add Row</button>
                    </div>


                    {/* <!-- Terms and Summary --> */}
                    <div class="row mt-5">
                        {/* <!-- Terms --> */}
                        <div class="col-md-6">
                            <div class="border p-3 bg-light rounded h-100">
                                <h6 class="fw-bold mb-3 text-center">Terms & Conditions</h6>
                                <hr />
                                <ul class="mb-0" >
                                    <li>Payment to be made within 7 days.</li>
                                    <li>Warranty as per manufacturer.</li>
                                    <li>Goods once sold will not be taken back.</li>
                                    <li>Prices are exclusive of GST.</li>
                                    <li>Delivery in 5-7 working days.</li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Summary --> */}
                        <div class="col-md-6">
                            <div class="border p-3 bg-light rounded">
                                <h6 class="fw-bold mb-3 text-center">Quotation Summary</h6>
                                <hr />
                                <div class="d-flex justify-content-between mb-2">
                                    <span>Subtotal:</span>
                                    <span>₹ 600.00</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2">
                                    <span>Discount:</span>
                                    <div class="d-flex align-items-center">
                                        <input type="number" class="form-control form-control-sm me-2" style={{ width: "80px" }} />
                                        ₹ 200.00
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between mb-2">
                                    <span>Total:</span>
                                    <span>₹ 400.00</span>
                                </div>
                                <div class="d-flex justify-content-between mb-2">
                                    <span>GST (18%):</span>
                                    <span>₹ 72.00</span>
                                </div>
                                <hr />
                                <div class="d-flex justify-content-between fw-bold fs-5">
                                    <span>Bill Amount:</span>
                                    <span>₹ 472.00</span>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* <!-- Action Buttons --> */}
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




