import React from "react";

function Home() {
    return (
        <div style={bodystyle}>
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
            <div>

                <div>Login
                    <input
                        style={styledpassword}
                        type="password"
                        placeholder="Enter PassWord"
                    />
                </div>
                <div>Register
                    <button style={styledregister} type="button">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );

}

const styledregister = {
    borderRadius: "10px",
    backgroundColor: "blue",
    color: "white",
    padding: "5px 7px",
    margin: '10px',
};

const styledpassword = {
    //display: 'flex',
    gap: '5px',
    margin: '10px',
    padding: '1px 5px',
    borderRadius:'5px',
}
const bodystyle = {
    //display: 'flex',
   margin: '10px',
    padding: '2px 2px'

}
export default Home;