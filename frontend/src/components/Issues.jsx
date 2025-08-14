import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Issues() {


    const [issue, setIssue] = useState([]);
    function loadData() {
        axios.get(process.env.REACT_APP_BASEURL + "/customer-issue")
            .then((res) => {
                setIssue(res.data.data);
            })
    };

    useEffect(() => {
        loadData();
    }, []);


    // -------------------DELETE---------------------
    function handleDelete(id) {
        Swal.fire({
            title: "Are you sure you want to delete this item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(process.env.REACT_APP_BASEURL + "/customer-issue/" + id)
                    .then((res) => {
                        console.log(res.data);
                        loadData();
                        Swal.fire("Deleted!", "The item has been deleted.", "success");
                    })
                    .catch((error) => {
                        Swal.fire("Error!", "There was a problem deleting the item.", "error");
                    });
            }
        });
    };

    return (
        <>
            {/* <h1>Issues</h1> */}


            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Customers Issues</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href=" ">Home</a></li>
                            <li class="breadcrumb-item active">Customers Issues</li>
                        </ol>


                        <div class="d-flex justify-content-end align-items-center">
                            <Link to={'/customerissues'}>
                                <button class="btn btn-primary px-4 ms-3 me-4 mt-2"><i class="fa-solid fa-plus"></i> Add Issues</button>
                            </Link>
                        </div>
                    </nav>
                </div>


                <div class="container mt-4">
                    <div class="table-responsive">
                        <table class="table table-bordered shadow text-center">
                            <thead class="table-secondary">
                                <tr>
                                    <th class="py-3">No</th>
                                    <th class="py-3">Customer Name</th>
                                    <th class="py-3">Issue</th>
                                    <th class="py-3">Employee Name</th>
                                    <th class="py-3">Issue Date</th>
                                    <th class="py-3">Close Date</th>
                                    {/* <th class="py-3">Reviews Count</th> */}
                                    {/* <th class="py-3">Status</th> */}
                                    <th class="py-3">Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    issue.map((eachData, i) => {
                                        return (
                                            <tr key={i}>
                                                <td class="py-3">{i + 1}</td>
                                                <td class="py-3">{eachData.customerId.name}</td>
                                                <td class="py-3">{eachData.issue}</td>
                                                <td class="py-3">{eachData.employeeId.name}</td>
                                                <td class="py-3">{eachData.issueDate}</td>
                                                <td class="py-3">{eachData.closeDate}</td>
                                                {/* <td class="py-3">1</td> */}
                                                {/* <td class="py-3">pending</td> */}

                                                <td class="py-3">
                                                    <button class="btn btn-sm btn-primary me-2"><i class="fa-solid fa-pencil"></i></button>
                                                    <button onClick={() => handleDelete(eachData._id)} class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
};

export default Issues;