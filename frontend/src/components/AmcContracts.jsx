import React from 'react'

function AmcContracts() {
    return (
        <>
            {/* <h1>AmcContracts</h1> */}

            <main id='main' className='main'>

                <div className="pagetitle">
                    <h1>Amc Contracts</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Amc Contracts</li>
                        </ol>
                    </nav>
                </div>



                {/* Read-only AMC Summary Table */}
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
                        {/* Example static rows — replace with map when you have real data */}
                        <tr>
                            <td>1</td>
                            <td>AMC-001</td>
                            <td>John Doe</td>
                            <td>2025-08-08</td>
                            <td>2026-08-07</td>
                            <td>
                                <button className="btn btn-primary btn-sm me-2" onClick={() => console.log("Edit AMC 1")}>
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => console.log("Delete AMC 1")}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>AMC-002</td>
                            <td>Jane Smith</td>
                            <td>2025-09-01</td>
                            <td>2026-08-31</td>
                            <td>
                                <button className="btn btn-primary btn-sm me-2" onClick={() => console.log("Edit AMC 2")}>
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => console.log("Delete AMC 2")}>
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

export default AmcContracts
