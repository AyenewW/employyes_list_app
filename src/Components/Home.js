import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{margin:'0 auto'}}>
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
            <div >
                <div style={styledcontainer} ><Link style={{textDecoration:"none",color:'white'}} to ='/login'>Login</Link></div>
                <div style={styledcontainer} ><Link style={{textDecoration:"none",color:'white'}} to ='/register'>Register</Link></div>
            </div>
        </div>
    );

}
const styledcontainer={

    backgroundColor:'#2196F3',
    width:'100px',
    //marginBottom:'10px',
    padding:'3px 0',
    textAlign:'center',
    borderRadius:'10px',
    //marginLeft:'10px',
    color:'#fff',
    margin:'10px',
    cursor:'pointer',
}
export default Home;