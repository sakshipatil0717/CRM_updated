// import logo from './logo.svg';
// import './App.css';
import "./assets/css/style.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Employees from "./components/Employees";
import Issues from "./components/Issues";
import AddIssue from "./components/AddIssue";
import IssueReviews from "./components/IssueReviews";
import Quotation from "./components/Quotation";
import QuotationDetails from "./components/QuotationDetails";
import AmcContracts from "./components/AmcContracts";
import AmcContractsDetails from "./components/AmcContractsDetails";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          {/* <Route path={'/'} element={<Sidebar />}></Route>
          <Route path={'/dashboard'} element={<Dashboard />}></Route> */}

          <Route path={'/'} element={<Sidebar />} >
            <Route index element={<Dashboard />}></Route>
            <Route path={'/customers'} element={<Customers />}></Route>
            <Route path={'/employees'} element={<Employees />}></Route>
            <Route path={'/issues'} element={<Issues />}></Route>
            <Route path={'/customerissues'} element={<AddIssue />}></Route>
            <Route path={'/issue-review'} element={<IssueReviews />}></Route>
            <Route path={'/quotations'} element={<Quotation />}></Route>
            <Route path={'/quotation-details'} element={<QuotationDetails />}></Route>
            <Route path={'/amc-contracts'} element={<AmcContracts />}></Route>
            <Route path={'/amc-contracts-details'} element={<AmcContractsDetails />}></Route>


            {/* <Route path={'/admin/addproduct'} element={<AddProduct />}></Route> 
            <Route path={'/admin/addproduct/:id'} element={<AddProduct />}></Route>   
            <Route path={'/admin/order'} element={<Order />}></Route>
            <Route path={'/admin/user'} element={<User />}></Route>   */}
          </Route>

        </Routes>

        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
