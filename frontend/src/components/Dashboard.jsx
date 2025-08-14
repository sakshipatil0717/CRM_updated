import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Dashboard() {
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



    return (
        <>
            {/* <h1>Dashboard</h1> */}

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}


                <div class="container py-4">
                    {/* <!-- summary cards --> */}
                    <div className="row g-4 mb-4">
                        {/* Leads */}
                        <div className="col-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-between align-items-center">
                                        Leads
                                        <i className="fas fa-user-plus"></i>
                                    </h5>
                                    <p className="card-text fs-4">540</p>
                                </div>
                            </div>
                        </div>

                        {/* Customers */}
                        <div className="col-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-between align-items-center">
                                        Customers
                                        <i className="fas fa-user-friends"></i>
                                    </h5>
                                    <p className="card-text fs-4">1,040</p>
                                </div>
                            </div>
                        </div>

                        {/* Revenue */}
                        <div className="col-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-between align-items-center">
                                        Revenue
                                        <i className="fas fa-rupee-sign"></i>
                                    </h5>
                                    <p className="card-text fs-4">₹129,400</p>
                                </div>
                            </div>
                        </div>

                        {/* Orders Closed */}
                        <div className="col-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-between align-items-center">
                                        Orders Closed
                                        <i className="fas fa-check-circle"></i>
                                    </h5>
                                    <p className="card-text fs-4">82</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Tables Row --> */}
                    <div className="row g-4 mb-4">
                        <div className="col-md-12">
                            <div className="card shadow-sm h-100 border-0">
                                <div className="card-body">
                                    <h5 className="card-title">Recent Employee</h5>
                                    <div className="table-responsive" style={{ maxHeight: '300px' }}>
                                        <table className="table table-striped table-hover align-middle">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Position</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Nilesh Patil</td>
                                                    <td>nilesh.p@gmail.com</td>
                                                    <td>Sales Manager</td>
                                                    <td><span className="badge bg-info">New</span></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Isha Rane</td>
                                                    <td>isha22@gmail.com</td>
                                                    <td>Marketing Specialist</td>
                                                    <td><span className="badge bg-warning text-dark">Contacted</span></td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Aarti Gokhale</td>
                                                    <td>aarti@gmail.com</td>
                                                    <td>Business Analyst</td>
                                                    <td><span className="badge bg-success">Qualified</span></td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Tanishq More</td>
                                                    <td>tanishq@gmail.com</td>
                                                    <td>Technical Support</td>
                                                    <td><span className="badge bg-danger">Lost</span></td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Rajat Sawant</td>
                                                    <td>rajat.sawant@gmail.com</td>
                                                    <td>IT Technician</td>
                                                    <td><span className="badge bg-primary">Follow-up</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Recent Activities and Top Customers --> */}
                    <div class="row g-4 mb-4">
                        <div class="col-md-6">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Top Customers</h5>
                                    <div class="table-responsive" style={{ maxHeight: '300px' }}>
                                        <table class="table table-hover table-sm">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    customerData.map((customer, index) => (
                                                        <tr key={index}>
                                                            <td>{customer.name}</td>
                                                            <td>{customer.email}</td>
                                                            <td>{customer.address}</td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="col-md-6">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Recent Activities</h5>
                                    <ul class="list-group">
                                        <li class="list-group-item"><i class="fas fa-plus-circle text-success me-2"></i>Added new lead: John Doe</li>
                                        <li class="list-group-item"><i class="fas fa-edit text-info me-2"></i>Updated customer profile: Acme Corp</li>
                                        <li class="list-group-item"><i class="fas fa-times-circle text-danger me-2"></i>Closed ticket #4521</li>
                                        <li class="list-group-item"><i class="fas fa-phone-alt text-primary me-2"></i>Logged call with Beta LLC</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* <!-- Meetings and Tasks --> */}
                    <div class="row g-4 mb-4">
                        <div class="col-md-6">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Upcoming Meetings</h5>
                                    <ul class="list-group">
                                        <li class="list-group-item">Team Sync – July 11, 10:00 AM</li>
                                        <li class="list-group-item">Customer Demo – July 12, 2:00 PM</li>
                                        <li class="list-group-item">Follow-up with Jane – July 13, 1:30 PM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Tasks</h5>
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="checkbox" />
                                            Call back: Mike Ross
                                        </li>
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="checkbox" checked />
                                            Prepare sales report
                                        </li>
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="checkbox" />
                                            Schedule follow-up email
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Performance and notifications --> */}
                    <div class="row g-4 mb-4">
                        <div class="col-md-6">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Sales Performance</h5>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-success" style={{ width: '70%' }}>Q1</div>
                                    </div>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-warning text-dark" style={{ width: '50%' }}>Q2</div>
                                    </div>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-danger" style={{ width: '30%' }}>Q3</div>
                                    </div>
                                    <p class="text-muted mt-3">Charts coming soon...</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card shadow-sm" style={{ height: '100%' }}>
                                <div class="card-body">
                                    <h5 class="card-title">Notifications</h5>
                                    <ul class="list-group list-unstyled">
                                        <li class="list-group-item">&bull; New message from Sarah Lee</li>
                                        <li class="list-group-item">&bull; Follow-up task due today</li>
                                        <li class="list-group-item">&bull; Lead converted: Delta Inc.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </>
    )
}

export default Dashboard;