
import React, { useState } from 'react';

function Quotation() {
    const [showModal, setShowModal] = useState(false);
    const [selectedQuotation, setSelectedQuotation] = useState(null);

    const quotations = [
        { number: 'QTN-001', customer: 'John Doe', date: '2025-08-08', amount: '5000', items: [{ product: 'Widget A', qty: 2, rate: 50 }] },
        { number: 'QTN-002', customer: 'Jane Smith', date: '2025-08-09', amount: '100', items: [{ product: 'Widget B', qty: 1, rate: 100 }] }
    ];

    const openModal = (quotation) => {
        setSelectedQuotation(quotation);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedQuotation(null);
    };


    const handlePrint = () => {
        // Hide buttons before printing
        const buttons = document.querySelectorAll(".no-print");
        buttons.forEach(btn => btn.style.display = "none");

        window.print();
        // Show them again after printing
        buttons.forEach(btn => btn.style.display = "");
    };


    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Quotation</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="">Home</a></li>
                        <li className="breadcrumb-item active">Quotation</li>
                    </ol>
                </nav>
            </div>

            {/* Quotation Table */}
            <table className="table align-middle table-bordered text-center mt-4">
                <thead className="table-secondary">
                    <tr>
                        <th>No</th>
                        <th>Quotation Number</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {quotations.map((q, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <button className="btn btn-link p-0 text-decoration-none" onClick={() => openModal(q)}>
                                    {q.number}
                                </button>
                            </td>
                            <td>{q.customer}</td>
                            <td>{q.date}</td>

                            <td>
                                <button className="btn btn-primary btn-sm me-2"><i className="fa-solid fa-pencil"></i> </button>
                                <button className="btn btn-danger btn-sm"><i className="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {/* Modal */}
            {showModal && selectedQuotation && (
                <>
                    {/* Backdrop */}
                    <div className="modal-backdrop fade show"></div>

                    {/* Modal Content */}
                    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header d-flex justify-content-center position-relative">
                                    <h5 className="modal-title m-0"> Invoice - {selectedQuotation.number}</h5>
                                    <button
                                        type="button"
                                        className="btn-close position-absolute end-0 me-3"
                                        onClick={closeModal}
                                    ></button>
                                </div>

                                <div className="modal-body">
                                    <p><strong>Customer:</strong> {selectedQuotation.customer}</p>
                                    <p><strong>Date:</strong> {selectedQuotation.date}</p>
                                    <p><strong>Amount:</strong> {selectedQuotation.amount}</p>

                                    {/* Table Title & Divider */}
                                    <hr style={{ borderTop: '2px solid black' }} />
                                    <h6 className="mt-3 mb-3">Quotation List</h6>

                                    <table className="table table-bordered text-center align-middle">
                                        <thead className="table-secondary">
                                            <tr>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Rate</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedQuotation.items.map((item, i) => (
                                                <tr key={i}>
                                                    <td>{item.product}</td>
                                                    <td>{item.qty}</td>
                                                    <td>${item.rate}</td>
                                                    <td>${item.qty * item.rate}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="modal-footer no-print">
                                    <button className="btn btn-primary" onClick={handlePrint}>
                                        <i className="fa-solid fa-print me-1"></i> Print
                                    </button>
                                    <button className="btn btn-danger" onClick={closeModal}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </main>
    );
}

export default Quotation;











