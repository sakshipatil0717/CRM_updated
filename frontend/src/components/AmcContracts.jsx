import React, { useState } from 'react';

function AmcContracts() {
    const [showModal, setShowModal] = useState(false);
    const [selectedAmc, setSelectedAmc] = useState(null);

    const amcContracts = [
        { 
            number: 'AMC-001', 
            customer: 'John Doe', 
            startDate: '2025-08-08', 
            endDate: '2026-08-07', 
            amount: '1200', 
            services: [
                { service: 'Annual Maintenance Visit', qty: 4, rate: 200 },
                { service: 'Emergency Support', qty: 2, rate: 100 }
            ]
        },
        { 
            number: 'AMC-002', 
            customer: 'Jane Smith', 
            startDate: '2025-09-01', 
            endDate: '2026-08-31', 
            amount: '800', 
            services: [
                { service: 'Annual Maintenance Visit', qty: 2, rate: 300 },
                { service: 'Software Updates', qty: 1, rate: 200 }
            ]
        }
    ];

    const openModal = (amc) => {
        setSelectedAmc(amc);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedAmc(null);
    };

    const handlePrint = () => {
        const buttons = document.querySelectorAll(".no-print");
        buttons.forEach(btn => btn.style.display = "none");

        window.print();

        buttons.forEach(btn => btn.style.display = "");
    };

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>AMC Contracts</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">AMC Contracts</li>
                    </ol>
                </nav>
            </div>

            {/* AMC Table */}
            <table className="table table-bordered text-center mt-4">
                <thead className="table-secondary">
                    <tr>
                        <th>No</th>
                        <th>AMC Number</th>
                        <th>Customer Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {amcContracts.map((amc, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <button 
                                    className="btn btn-link p-0 text-decoration-none"
                                    onClick={() => openModal(amc)}
                                >
                                    {amc.number}
                                </button>
                            </td>
                            <td>{amc.customer}</td>
                            <td>{amc.startDate}</td>
                            <td>{amc.endDate}</td>
                            <td>
                                <button className="btn btn-primary btn-sm me-2">
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button className="btn btn-danger btn-sm">
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {showModal && selectedAmc && (
                <>
                    {/* Backdrop */}
                    <div className="modal-backdrop fade show"></div>

                    {/* Modal Content */}
                    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header d-flex justify-content-center position-relative">
                                    <h5 className="modal-title m-0">AMC Contract - {selectedAmc.number}</h5>
                                    <button 
                                        type="button" 
                                        className="btn-close position-absolute end-0 me-3"
                                        onClick={closeModal}
                                    ></button>
                                </div>

                                <div className="modal-body">
                                    <p><strong>Customer:</strong> {selectedAmc.customer}</p>
                                    <p><strong>Start Date:</strong> {selectedAmc.startDate}</p>
                                    <p><strong>End Date:</strong> {selectedAmc.endDate}</p>
                                    <p><strong>Total Amount:</strong> ${selectedAmc.amount}</p>

                                    <hr style={{ borderTop: '2px solid black' }} />
                                    <h6 className="mt-3 mb-3">Service Details</h6>

                                    <table className="table table-bordered text-center align-middle">
                                        <thead className="table-secondary">
                                            <tr>
                                                <th>Service</th>
                                                <th>Quantity</th>
                                                <th>Rate</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedAmc.services.map((service, i) => (
                                                <tr key={i}>
                                                    <td>{service.service}</td>
                                                    <td>{service.qty}</td>
                                                    <td>${service.rate}</td>
                                                    <td>${service.qty * service.rate}</td>
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

export default AmcContracts;

