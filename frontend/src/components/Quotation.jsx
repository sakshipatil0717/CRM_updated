import React, { useEffect, useState } from 'react';


function Quotation() {

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
                    <h1>Quotation</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="">Home</a></li>
                            <li class="breadcrumb-item active">Quotation</li>
                        </ol>
                    </nav>
                </div>

            
                {/* Read-only Quotation Summary Table */}

                <table className="table table-bordered text-center mt-4">
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
                        {/* {rows.map((row, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{row.date}</td>
                                <td>{row.customerName}</td>
                                <td>{row.quotationNumber}</td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => console.log("Edit row", index)}
                                    >
                                      <i class="fa-solid fa-pencil"></i>
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleRemoveRow(index)}
                                    >
                                       <i class="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))} */}

                        <tr>
                            <td>1</td>
                            <td>QTN-001</td>
                            <td>John Doe</td>
                            <td>2025-08-08</td>
                            <td>
                                <button className="btn btn-primary btn-sm me-2" onClick={() => console.log("Edit row 1")}>
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => console.log("Delete row 1")}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>QTN-002</td>
                            <td>Jane Smith</td>
                            <td>2025-08-09</td>
                            <td>
                                <button className="btn btn-primary btn-sm me-2" onClick={() => console.log("Edit row 1")}>
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => console.log("Delete row 1")}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </main>

        </>
    )
}

export default Quotation














