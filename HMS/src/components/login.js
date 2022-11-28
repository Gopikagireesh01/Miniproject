// import logo from './logo.svg';
// import './App.css';
// import { name } from 'mustache';
import react, { useState, Component } from 'react';

// import  ReactDOM  from "react-dom";
import "./login.css";

function Login() {    
        const [errorMessages, setErrorMessages] = useState({});
        const [isSubmitted, setIsSubmitted] = useState(false);
      
      
        const database = [
            {
                username: "user1",
                password: "pass1"
            },
            {
                username: "user2",
                password: "pass2"
            }
        ];
        const errors = {
            uname: "invalid username",
            pass : "invalid password"
        };
      
        const handleSubmit = (Event) => {
            Event.preventDefault();
      
            var { uname,pass } = document.forms[0];
            
            const userData = database.find((user) => user.username === uname.value);
      
      
            if(userData){
                if(userData.password !== pass.value) {
      
                    setErrorMessages({ name:"pass", message: errors.pass });
                }else{
                    setIsSubmitted(true);
                }
                }else{
                    setErrorMessages({ name: "uname", message: errors.uname });
                }
            };
      
            const renderErrorMessage = (name) =>
                name === errorMessages.name && (
                    <div className="error">{errorMessages.message}</div>
                );
                const renderForm = (
                    <div className='form'>
                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <label>Username</label>
                                <input type="text" name="uname" required/>
                                {renderErrorMessage("uname")}
                            </div>
                            <div className="input-container">
                                <label>password</label>
                                <input type="password" name="pass" required />
                                {renderErrorMessage("pass")}
                            </div>
                            <div className="button-container">
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                );
      
                return (
                    <div className="app">
                        <div className="login-form">
                            <div className="title">Sign In</div>
                            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
                        </div>
                    </div>
                );
}
export default Login;

// function Login() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //         how can we help you?
  //       </a>
  //     </header>
  //   </div>
  // ); 
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


