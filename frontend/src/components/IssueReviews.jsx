import React from 'react'

function IssueReviews() {
    return (
        <>
            {/* <h1>Issue Reviews</h1> */}

            <main id="main" class="main">


                <div class="pagetitle">
                    <h1>Customers</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a href="">General Reports</a></li>
                            <li class="breadcrumb-item active">Issue Reviews</li>
                        </ol>
                    </nav>
                </div>

                <div class="container mt-5">
                    <div class="table-responsive">
                        <table class="table table-bordered shadow text-center">
                            <thead class="table-secondary">
                                <tr>
                                    <th class="py-3">No</th>
                                    {/* <th class="py-3">Customer Name</th> */}
                                    <th class="py-3">Issue</th>
                                    <th class="py-3">Review Date & Time</th>
                                    <th class="py-3">Employee Name</th>
                                    <th class="py-3">Review</th>
                                    <th class="py-3">Review Count</th>
                                    <th class="py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                    customerData.map((eachData, i) => {
                                        return (
                                            <tr key={i}>
                                                <td class="py-3">{i + 1}</td>
                                                <td class="py-3">{eachData.name}</td>
                                                <td class="py-3">{eachData.address}</td>
                                                <td class="py-3">{eachData.email}</td>
                                                <td class="py-3">{eachData.mobile}</td>
                                                <td class="py-3">{eachData.alternativeMobile}</td>
                                                <td class="py-3">
                                                    <button onClick={() => handleUpdate(eachData._id)} class="btn btn-primary me-2">Edit</button>
                                                    <button onClick={() => handleDelete(eachData._id)} class="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                } */}

                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <div class="d-flex justify-content-center align-item-center" style={{ height: "50vh" }}>
                <h3 className='text-danger'>No Review Found</h3>
            </div>
        </>
    )
}

export default IssueReviews