// // import logo from './logo.svg';
// // import './App.css';
// // import { name } from 'mustache';
// import react, { useState } from 'react';
// import  ReactDOM  from "react-dom";
// import "./login.css";
// import { Route, Routes } from "react-router-dom";
// import  Login  from "./components/login";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
  import LoginComponent from "./LoginCompoent"
//   import PLoginCompoent from "../src/PLoginComponent"
 import Registration from "./Registration"
 import Home from "./Home"
 import Admin from "./Admin"
    import AdminDoctor from "./AdminDoctor"
    import AdminPatient from "./AdminPatient"

  

 import DoctorRegistration from "../src/DoctorRegistration"
import Appointment from "../src/Appointment"
import Patientprofile from './Patientprofile';
import Doctorprofile from './Doctorprofile';
import PatientRecords from './PatientRecords';
import DoctorRecords from './DoctorRecords';
import AppointmentDetails from './AppointmentDetails'
// function App() {
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //         how can we help you?
//   //       </a>
//   //     </header>
//   //   </div>
//   // ); 
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);


//   const database = [
//       {
//           username: "user1",
//           password: "pass1"
//       },
//       {
//           username: "user2",
//           password: "pass2"
//       }
//   ];
//   const errors = {
//       uname: "invalid username",
//       pass : "invalid password"
//   };

//   const handleSubmit = (Event) => {
//       Event.preventDefault();

//       var { uname,pass } = document.forms[0];
      
//       const userData = database.find((user) => user.username === uname.value);


//       if(userData){
//           if(userData.password !== pass.value) {

//               setErrorMessages({ name:"pass", message: errors.pass });
//           }else{
//               setIsSubmitted(true);
//           }
//           }else{
//               setErrorMessages({ name: "uname", message: errors.uname });
//           }
//       };

//       const renderErrorMessage = (name) =>
//           name === errorMessages.name && (
//               <div className="error">{errorMessages.message}</div>
//           );
//           const renderForm = (
//               <div className='form'>
//                   <form onSubmit={handleSubmit}>
//                       <div className="input-container">
//                           <label>Username</label>
//                           <input type="text" name="uname" required/>
//                           {renderErrorMessage("uname")}
//                       </div>
//                       <div className="input-container">
//                           <label>password</label>
//                           <input type="password" name="pass" required />
//                           {renderErrorMessage("pass")}
//                       </div>
//                       <div className="button-container">
//                           <input type="submit" />
//                       </div>
//                   </form>
//               </div>
//           );

//           return (
//               <div className="app">
//                   <div className="login-form">
//                       <div className="title">Sign In</div>
//                       {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//                   </div>
//               </div>
//           );


// }

// export default App;
export const ENDPOINT = "http://localhost:8000";

// const fetcher = (url: string) =>
//   fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App(){
    return(
        // <main>
        //     <Login/>
        //   {/* <Routes>
        //     {/* <Route path="/*" element={<Login />} /> */}
        //     {/* <Route path="/hello" element={<p>Hellooo</p>} />
        //   </Routes> */} 
        // </main>
        // <LoginComponent></LoginComponent>  
        // <Registration />
        //  <PLoginCompoent/>
        // <Registration/>
        // <DoctorRegistration></DoctorRegistration>
          // <Appointment></Appointment>
          //<Home/>
          //<Admin></Admin>
          //<AdminDoctor></AdminDoctor>
        //   <AdminPatient></AdminPatient>
        <BrowserRouter>
        <Routes>
        <Route element={<Home/>} path="/home"/>
        <Route element={<Appointment></Appointment>} path="/appointment"/>
        <Route element={<LoginComponent></LoginComponent> } path="/login/:user"/>  
        <Route element={<Admin></Admin>} path="/profile/admin/:user"/>
        <Route element={<AdminPatient></AdminPatient>} path="/adminpatient"/>
        <Route element={<AdminDoctor></AdminDoctor>} path="/admindoctor"/>
        {/* <Route element={<Admin></Admin>} path="/patient"/> */}
        {/* <Route element={<Admin></Admin>} path="/doctor"/> */}
        <Route element={<Registration />} path="/signup/patient"/>
        <Route element={<DoctorRegistration></DoctorRegistration>} path="/signup/doctor"/>
        <Route element={<Patientprofile />} path="/profile/patient/:user"/>
        <Route element={<Doctorprofile />} path="/profile/doctor/:user"/>
        <Route element={<PatientRecords />} path="/records/patient"/>
        <Route element={<DoctorRecords/>} path="/records/doctor"/>
        <Route element={<AppointmentDetails />} path="/appointmentdetails"/>
        </Routes>
        </BrowserRouter>
        // <BrowserRouter>
        // <Routes>
        // <Route path="/manatee">
        //   <AdminPatient></AdminPatient>
        //   </Route>
        //   <Route path="/narwhal">
        //   <AdminDoctor></AdminDoctor>
        //   </Route>
        //   <Route path="/whale">
        //   <Admin></Admin>
        //   </Route>
        // </Routes>
          
        // </BrowserRouter>
    )
    }



export default App;

