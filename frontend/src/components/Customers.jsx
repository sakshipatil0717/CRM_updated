import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

function Customers() {

    const [id, setId] = useState(null);


    {/*********GET CUSTOMER METHOD ***********/ }
    const [customerData, setCustomerData] = useState([]);

    function loadData() {
        axios.get(process.env.REACT_APP_BASEURL + "/customers")
            .then((res) => {
                console.log(res.data);
                setCustomerData(res.data.data);
            })
    };
    useEffect(() => {
        loadData();
    }, []);

    {/* <h1>Cancel data</h1> */ }
    const handleCancel = () => {
        setCustomer({ name: '', address: '', email: '', mobile: '', alternativeMobile: '' });
    };

    //to post data
    const [customer, setCustomer] = useState({
        name: "",
        address: "",
        email: "",
        mobile: "",
        alternativeMobile: ""
    });

    // Handle Input Change
    const handleChangeCustomerData = (e) => {
        //console.log(e.target.value)
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };


    // Handle Form Submission
    const handleSubmitCustomer = async (e) => {
        e.preventDefault();

        // console.log(customer);
        // console.log(process.env.REACT_APP_BASEURL);
        // axios.post("http://localhost:8085/customers", customer)
        //   .then((res) => {
        //     console.log(res.data.data);
        //   })

        if (!id) {
            try {
                await axios.post(process.env.REACT_APP_BASEURL + "/customers", customer);
                alert("Customer added successfully!");
                setCustomer({ name: '', address: '', email: '', mobile: '', alternativeMobile: '' }); // Clear form
                loadData();  // Reload data after adding
            } catch (error) {
                console.error("Error adding Customer:", error);
            }
        }
        else {
            try {
                await axios.put(process.env.REACT_APP_BASEURL + "/customers/" + id, customer);
                alert("Customer updated successfully!");
                setId(null);
                setCustomer({ name: '', address: '', email: '', mobile: '', alternativeMobile: '' }); // Clear form
                loadData(); // Reload data after update
            } catch (error) {
                console.error("Error updating Customer:", error);
            }
        }
    };


    // -------------------UPDATE---------------------
    function handleUpdate(id) {
        axios.get(process.env.REACT_APP_BASEURL + "/customers/" + id)
            .then((res) => {
                console.log(res.data.data);

                setCustomer({
                    name: res.data.data.name,
                    address: res.data.data.address,
                    email: res.data.data.email,
                    mobile: res.data.data.mobile,
                    alternativeMobile: res.data.data.alternativeMobile

                });

                setId(id);  // Store ID to switch to update mode
            })
            .catch((error) => {
                console.error("Error fetching Customer data:", error);
            });
    };





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
                axios.delete(process.env.REACT_APP_BASEURL + "/customers/" + id)
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
            {/* <h1>Customers</h1> */}

            <main id="main" class="main">


                <div class="pagetitle">
                    <h1>Customers</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a href="">Forms</a></li>
                            <li class="breadcrumb-item active">Customers</li>
                        </ol>
                    </nav>
                </div>

                <div class="container mt-4">
                    <div class="card p-5 shadow-sm">
                        <form>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="name" class="form-label fw-bold">Name <span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control" id="name" name='name' value={customer.name} onChange={handleChangeCustomerData} placeholder="Enter Name" />
                                </div>
                                <div class="col-md-6">
                                    <label for="address" class="form-label fw-bold">Address <span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control" id="address" name='address' value={customer.address} onChange={handleChangeCustomerData} placeholder="Enter Address" />
                                </div>
                            </div>
                            <div class="row mb-3 mt-4">
                                <div class="col-md-4">
                                    <label for="city" class="form-label fw-bold">Email <span className='text-danger'>*</span></label>
                                    <input type="email" class="form-control" id="email" name='email' value={customer.email} onChange={handleChangeCustomerData} placeholder="Enter Email" />
                                </div>
                                <div class="col-md-4">
                                    <label for="mobile" class="form-label fw-bold">Mobile No <span className='text-danger'>*</span></label>
                                    <input type="tel" class="form-control" id="mobile" name='mobile' value={customer.mobile} onChange={handleChangeCustomerData} placeholder="Enter Mobile No" />
                                </div>
                                <div class="col-md-4">
                                    <label for="altMobile" class="form-label fw-bold">Alternative Mobile No </label>
                                    <input type="tel" class="form-control" id="alternativeMobile" name='alternativeMobile' value={customer.alternativeMobile} onChange={handleChangeCustomerData} placeholder="Enter Alternative Mobile No" />
                                </div>
                            </div>

                            <div class="d-flex justify-content-end mt-4">
                                <button type="submit" onClick={handleSubmitCustomer} class="btn btn-success rounded-pill btn-sm me-2 px-4 py-2">Save</button>
                                <button type="reset" onClick={handleCancel} class="btn btn-danger rounded-pill btn-sm px-4 py-2">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="container mt-5">
                    <div class="table-responsive">
                        <table class="table table-bordered shadow text-center">
                            <thead class="table-secondary">
                                <tr>
                                    <th class="py-3">No</th>
                                    <th class="py-3">Name</th>
                                    <th class="py-3">Address</th>
                                    <th class="py-3">Email</th>
                                    <th class="py-3">Mobile No</th>
                                    <th class="py-3">Alternative Mobile No</th>
                                    <th class="py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customerData.map((eachData, i) => {
                                        return (
                                            <tr key={i}>
                                                <td class="py-3">{i + 1}</td>
                                                <td class="py-3">{eachData.name}</td>
                                                <td class="py-3">{eachData.address}</td>
                                                <td class="py-3">{eachData.email}</td>
                                                <td class="py-3">{eachData.mobile}</td>
                                                <td class="py-3">{eachData.alternativeMobile}</td>
                                                <td class="">
                                                    <button onClick={() => handleUpdate(eachData._id)} class="btn btn-primary me-2 btn-sm"><i class="fa-solid fa-pencil"></i></button>
                                                    <button onClick={() => handleDelete(eachData._id)} class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i></button>
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
}

export default Customers