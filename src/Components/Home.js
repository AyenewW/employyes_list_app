import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome To the EmployeePage</h1>
            <p> Types of employees:
                Full-Time Employees.
                Part-Time Employees.
                Seasonal Employees.
                Temporary Employees.
                someone who is paid to work for someone else:
                The number of employees in the company has trebled over the past decade.
                I discussed my complaint with an employee of the bank.
                have/recruit/train employees We have ten employees and a turnover of around £450,000.
                a government/company/council employee
                a full-time/part-time employee
                a former/new/prospective employee
                a senior/experienced employee
            </p>
            <div style={styledcontainer}>
                <div><Link style={{textDecoration:"none",color:'white'}} to ='/login'>Login</Link></div>
                <div><Link style={{textDecoration:"none",color:'white'}} to ='/register'>Register</Link></div>
            </div>
        </div>
    );

}
const styledcontainer={
    collor:'red',
    TextDecoration:'noon',
    margin:'30px',
}
export default Home;