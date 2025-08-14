import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddIssue() {

    // Fetch Customers
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASEURL + "/customers")
            .then((res) => {
                setCustomerData(res.data.data);
            })
            .catch((error) => console.error("Error fetching customers:", error));
    }, []);

    // Fetch Employee
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {

        axios.get(process.env.REACT_APP_BASEURL + "/employees")
            .then((res) => {

                console.log(res.data.data);
                setEmployeeData(res.data.data);
            })
            .catch((error) => console.error("Error fetching employees:", error));
    }, []);



    {/* **********<h1>Cancel/clear data</h1>*********** */ }
    const handleReset = () => {
        setIssue({ customerId: "", closeDate: "", issueDate: "", employeeId: "", issue: "" });
    };

    {/* POST EMPLOYEE */ }
    const [issue, setIssue] = useState({
        customerId: "",
        issue: "",
        issueDate: "",
        employeeId: "",
        closeDate: "",
        // status: ""
    });

    // Handle Input Change
    const handleChangeIssue = (e) => {
        //console.log(e.target.value)
        setIssue({ ...issue, [e.target.name]: e.target.value });
    };


    // Handle Form Submission
    const handleSubmitIssue = async (e) => {
        e.preventDefault();
        try {
            await axios.post(process.env.REACT_APP_BASEURL + "/customer-issue", issue);
            alert("Issue added successfully!");
            setIssue({ customerId: "", closeDate: "", issueDate: "", employeeId: "", issue: "" }); // Clear form
            // loadData();  // Reload data after adding
        } catch (error) {
            console.error("Error adding CustomerIssue:", error);
        }

    }


    return (
        <>
            {/* <h1>AddIssue</h1> */}
            <main id="main" class="main">
                <div class="pagetitle">
                    <h1>Issues Data</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="">Home</a></li>
                            <li class="breadcrumb-item"><a href="">Customers Issues</a></li>
                            <li class="breadcrumb-item active">Issues Data</li>
                        </ol>
                    </nav>
                </div>


                <div class="container mt-4">
                    <div class="card p-5 shadow-sm">
                        <form>
                            {/* <!-- Customer & Employee in one row --> */}
                            <div class="row mb-6">
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Customer <span className='text-danger'>*</span></label>
                                    <select id="customerId" name='customerId' value={issue.customerId} onChange={handleChangeIssue} class="form-select" required>
                                        <option value="" selected>-- Select Customer --</option>
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
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Employee <span className='text-danger'>*</span></label>
                                    <select id="employeeId" name='employeeId' value={issue.employeeId} onChange={handleChangeIssue} class="form-select" required>
                                        <option selected>-- Select Employee --</option>

                                        {
                                            employeeData.map((employee) => {
                                                return (
                                                    <option key={employee._id} value={employee._id}>
                                                        {employee.name} ({employee.position})
                                                    </option>
                                                )
                                            })
                                        }


                                    </select>
                                </div>
                            </div>


                            {/* <!-- Issue Textarea --> */}
                            <div class="row mb-3 mt-4">
                                <div class="col-md-12">
                                    <label class="form-label fw-bold">Issue <span className='text-danger'>*</span></label>
                                    <textarea class="form-control" id="issue" name='issue' value={issue.issue} onChange={handleChangeIssue} rows="3" required></textarea>
                                </div>
                            </div>


                            {/* <!-- Issue Date & Close Date in one row --> */}
                            <div class="row mb-6 mt-4">
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Issue Date <span className='text-danger'>*</span></label>
                                    <input type="date" id="issueDate" name='issueDate' value={issue.issueDate} onChange={handleChangeIssue} class="form-control" required />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label fw-bold">Close Date</label>
                                    <input type="date" id="closeDate" name='closeDate' value={issue.closeDate} onChange={handleChangeIssue} class="form-control" />
                                </div>
                            </div>


                            {/* <!-- Buttons aligned to the right --> */}
                            <div class="d-flex justify-content-end mt-4">
                                <button type="submit" onClick={handleSubmitIssue} class="btn btn-success rounded-pill btn-sm me-2 px-4 py-2">Save</button>
                                <button type="reset" onClick={handleReset} class="btn btn-danger rounded-pill btn-sm px-4 py-2">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>


            </main>
        </>
    )
}

export default AddIssue