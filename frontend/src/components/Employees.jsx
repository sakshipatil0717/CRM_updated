import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';


function Employees() {
    const [id, setId] = useState(null);

    {/*********GET EMPLOYEE ***********/ }
    const [employeeData, setEmployeeData] = useState([]);

    function loadData() {

        axios.get(process.env.REACT_APP_BASEURL + "/employees")
            .then((res) => {
                // console.log(res.data.data);
                setEmployeeData(res.data.data);
            })
    };
    useEffect(() => {
        loadData();
    }, []);

    {/* **********<h1>Cancel/clear data</h1>*********** */ }
    const handleReset = () => {
        setEmployee({ name: "", position: "", email: "", mobile: "", password: "" });
    };

    {/*********POST EMPLOYEE ***********/ }
    const [employee, setEmployee] = useState({
        name: "",
        position: "",
        email: "",
        mobile: "",
        password: ""
    });


    // Handle Form Submission
    const handleSubmitEmployee = async (e) => {
        e.preventDefault();

        // console.log(employee);
        // console.log(process.env.REACT_APP_BASEURL);
        // axios.post("http://localhost:8085/employees", employee)
        //   .then((res) => {
        //     console.log(res.data.data);
        //   })

        if (!id) {
            try {
                await axios.post(process.env.REACT_APP_BASEURL + "/employees", employee);
                alert("Employee added successfully!");
                setEmployee({ name: "", position: "", email: "", mobile: "", password: "" }); // Clear form
                loadData();  // Reload data after adding
            } catch (error) {
                console.error("Error adding Employee:", error);
            }
        }
        else {
            try {
                await axios.put(process.env.REACT_APP_BASEURL + "/employees/" + id, employee);
                alert("Employee updated successfully!");
                setId(null);
                setEmployee({ name: "", position: "", email: "", mobile: "", password: "" }); // Clear form
                loadData(); // Reload data after update
            } catch (error) {
                console.error("Error updating Employee:", error);
            }
        }
    };

    // Handle Input Change
    const handleChangeEmployeeData = (e) => {
        //console.log(e.target.value)
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };


    // -------------------UPDATE---------------------
    function handleUpdate(id) {
        axios.get(process.env.REACT_APP_BASEURL + "/employees/" + id)
            .then((res) => {
                console.log(res.data.data);

                setEmployee({
                    name: res.data.data.name,
                    position: res.data.data.position,
                    email: res.data.data.email,
                    mobile: res.data.data.mobile,
                    password: res.data.data.password
                });

                setId(id);  // Store ID to switch to update mode
            })
            .catch((error) => {
                console.error("Error fetching Employee data:", error);
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
                axios.delete(process.env.REACT_APP_BASEURL + "/employees/" + id)
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
            {/* <h1>Employees</h1> */}

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Employees</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href=" ">Home</a></li>
                            <li class="breadcrumb-item"><a href="">Forms</a></li>
                            <li class="breadcrumb-item active">Employees</li>
                        </ol>
                    </nav>
                </div>


                <div class="container mt-4">
                    <div class="card p-5 shadow-sm">
                        <form>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="name" class="form-label fw-bold">Name <span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control" id="name" name='name' value={employee.name} onChange={handleChangeEmployeeData} placeholder="Enter Name" />
                                </div>
                                <div class="col-md-6">
                                    <label for="address" class="form-label fw-bold">Position <span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control" id="position" name='position' value={employee.position} onChange={handleChangeEmployeeData} placeholder="Enter Position" />
                                </div>
                            </div>
                            <div class="row mb-3 mt-4">
                                <div class="col-md-4">
                                    <label for="city" class="form-label fw-bold">Email <span className='text-danger'>*</span></label>
                                    <input type="email" class="form-control" id="email" name='email' value={employee.email} onChange={handleChangeEmployeeData} placeholder="Enter Email" />
                                </div>
                                <div class="col-md-4">
                                    <label for="mobile" class="form-label fw-bold">Mobile No <span className='text-danger'>*</span></label>
                                    <input type="tel" class="form-control" id="mobile" name='mobile' value={employee.mobile} onChange={handleChangeEmployeeData} placeholder="Enter Mobile No" />
                                </div>
                                <div class="col-md-4">
                                    <label for="altMobile" class="form-label fw-bold">Password <span className='text-danger'>*</span></label>
                                    <input type="password" class="form-control" id="password" name='password' value={employee.password} onChange={handleChangeEmployeeData} placeholder="Enter Password" />
                                </div>
                            </div>
                            <div class="d-flex justify-content-end mt-4">
                                <button type="submit" onClick={handleSubmitEmployee} class="btn btn-success rounded-pill btn-sm me-2 px-4 py-2">Save</button>
                                <button type="reset" onClick={handleReset} class="btn btn-danger rounded-pill btn-sm px-4 py-2">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div class="container mt-5">
                    <div class="table-responsive">
                        <table class="table table-bordered text-center shadow">
                            <thead class="table-secondary">
                                <tr>
                                    <th class="py-3">No</th>
                                    <th class="py-3">Name</th>
                                    <th class="py-3">Position</th>
                                    <th class="py-3">Email</th>
                                    <th class="py-3">Mobile No</th>
                                    <th class="py-3">Password</th>
                                    <th class="py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employeeData.map((eachData, i) => {
                                        return (
                                            <tr key={i}>
                                                <td class="py-3">{i + 1}</td>
                                                <td class="py-3">{eachData.name}</td>
                                                <td class="py-3">{eachData.position}</td>
                                                <td class="py-3">{eachData.email}</td>
                                                <td class="py-3">{eachData.mobile}</td>
                                                <td class="py-3">{eachData.password}</td>
                                                <td class="py-3">
                                                    <button onClick={() => handleUpdate(eachData._id)} class="btn btn-primary me-2  btn-sm"><i class="fa-solid fa-pencil"></i></button>
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

export default Employees