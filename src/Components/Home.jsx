// import { Login } from './Login';
// import { Register } from './Register';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import Button from '@material-ui/core/Button';
// import './Home.css';

// const Home = ( ) => {
//   const [currentForm, setCurrentForm] = useState('Login');
//   const navigate = useNavigate();

//   const toggleForm = () => {
//     if (currentForm === 'Login') {
//       setCurrentForm('Register');
//     } else {
//       setCurrentForm('Login');
//     }
//   };

//   const handleLogin = () => {
//     console.log('login');
//     navigate({
//       pathname: '/login'
//     });
//   };

//   const handleRegister = () => {
//     console.log('signup');
//     navigate({
//       pathname: '/signup'
//     });
//   };

//   return (
//     <div className="home-container">
//       <h1 className="home-title">Welcome to the Employees Home Page</h1>
//       <p className="home-description">
//         Types of employees: Full-Time Employees. Part-Time Employees. Seasonal
//         Employees. Temporary Employees. someone who is paid to work for someone
//         else: The number of employees in the company has trebled over the past
//         decade. I discussed my complaint with an employee of the bank.
//         have/recruit/train employees We have ten employees and a turnover of
//         around £450,000. a government/company/council employee a
//         full-time/part-time employee a former/new/prospective employee a
//         senior/experienced employee
//       </p>
//       <div className="home-form-container">
//         {currentForm === 'Login' ? (
//           <Login    toggleForm={toggleForm} />
//         ) : (
//           <Register toggleForm={toggleForm} />
//         )}
//         <div className="home-form-toggle">
//           <Button onClick={toggleForm} variant="contained">
//             {currentForm === 'Login' ? 'Register' : 'Login'}
//           </Button>
//         </div>
//       </div>
//       <div className="home-button-container">
//         <Button onClick={handleLogin} variant="contained">
//           Login
//         </Button>
//         <Button onClick={handleRegister} variant="contained">
//           Register
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import { Login } from './Login';
// import { Register } from './Register';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import Button from '@material-ui/core/Button';
// import './Home.css';

// const Home = ({ setIsLoggedIn }) => {
//   const [currentForm, setCurrentForm] = useState('Login');
//   const navigate = useNavigate();

//   const toggleForm = () => {
//     if (currentForm === 'Login') {
//       setCurrentForm('Register');
//     } else {
//       setCurrentForm('Login');
//     }
//   };

//   const handleLogin = () => {
//     console.log('login');
//     navigate({
//       pathname: '/login'
//     });
//   };

//   const handleRegister = () => {
//     console.log('signup');
//     navigate({
//       pathname: '/signup'
//     });
//   };

//   return (
//     <div className="home-container">
//       <h1 className="home-title">Welcome to the Employees Home Page</h1>
//       <p className="home-description">
//         Types of employees: Full-Time Employees. Part-Time Employees. Seasonal
//         Employees. Temporary Employees. someone who is paid to work for someone
//         else: The number of employees in the company has trebled over the past
//         decade. I discussed my complaint with an employee of the bank.
//         have/recruit/train employees We have ten employees and a turnover of
//         around £450,000. a government/company/council employee a
//         full-time/part-time employee a former/new/prospective employee a
//         senior/experienced employee
//       </p>
//       <div className="home-form-container">
//         {currentForm === 'Login' ? (
//           <Login setIsLoggedIn={setIsLoggedIn} toggleForm={toggleForm} />
//         ) : (
//           <Register toggleForm={toggleForm} />
//         )}
//         {/* <div className="home-form-toggle">
//           <Button onClick={toggleForm} variant="contained">
//             {currentForm === 'Login' ? 'Register' : 'Login'}
//           </Button>
//         </div> */}
//       </div>
//       {/* <div className="home-button-container">
//         <Button onClick={handleLogin} variant="contained">
//           Login
//         </Button>
//         <Button onClick={handleRegister} variant="contained">
//           Register
//         </Button>
//       </div> */}
//     </div>
//   );
// };

// export default Home;
import { Login } from './Login';
import { Register } from './Register';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import './Home.css';

const Home = () => {
  const [currentForm, setCurrentForm] = useState('Login');
  const navigate = useNavigate();

  const toggleForm = () => {
    if (currentForm === 'Login') {
      setCurrentForm('Register');
    } else {
      setCurrentForm('Login');
    }
  };

  const handleLogin = () => {
    console.log('login');
    navigate({
      pathname: '/login'
    });
  };

  const handleRegister = () => {
    console.log('signup');
    navigate({
      pathname: '/signup'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentForm === 'Login') {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Employees Home Page</h1>
      <p className="home-description">
        Types of employees: Full-Time Employees. Part-Time Employees. Seasonal
        Employees. Temporary Employees. someone who is paid to work for someone
        else: The number of employees in the company has trebled over the past
        decade. I discussed my complaint with an employee of the bank.
        have/recruit/train employees We have ten employees and a turnover of
        around £450,000. a government/company/council employee a
        full-time/part-time employee a former/new/prospective employee a
        senior/experienced employee
      </p>
      <form onSubmit={handleSubmit}>
        <div className="home-form-container">
          {currentForm === 'Login' ? (
            <Login toggleForm={toggleForm} />
          ) : (
            <Register toggleForm={toggleForm} />
          )}
           
        </div>
         
      </form>
    </div>
  );
};

export default Home;
